require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Ensure uploads and temp directories exist
const uploadDir = path.join(__dirname, 'uploads');
const tempDir = path.join(__dirname, 'temp');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

// Multer storage configuration for chunked uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, tempDir);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 500 * 1024 * 1024, // 500MB limit
        fieldSize: 500 * 1024 * 1024
    }
});

let gridfsBucket;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ MongoDB Connected Successfully');
        gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: 'uploads'
        });
    })
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------

// User Model
let User;
try {
    User = mongoose.model('User');
} catch {
    const UserSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        password: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
    });
    User = mongoose.model('User', UserSchema);
}

// Booking Model
let Booking;
try {
    Booking = mongoose.model('Booking');
} catch {
    const BookingSchema = new mongoose.Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        destination: { type: String, required: true },
        date: { type: Date, required: true },
        people: { type: String, required: true },
        vacationType: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        price: { type: Number, default: 0 },
        status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
        submittedAt: { type: Date, default: Date.now }
    });
    Booking = mongoose.model('Booking', BookingSchema);
}

// Review Model
let Review;
try {
    Review = mongoose.model('Review');
} catch {
    const ReviewSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        foodReview: String,
        roomReview: String,
        vehicleReview: String,
        rating: { type: Number, default: 5 },
        userEmail: { type: String, required: true },
        type: { type: String, enum: ['review', 'memory'], default: 'review' },
        media: [{
            url: String,
            type: { type: String, default: 'image' }
        }],
        createdAt: { type: Date, default: Date.now },
        likes: { type: Number, default: 0 }
    });
    Review = mongoose.model('Review', ReviewSchema);
}

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// Wrapper to debug Multer errors
const chunkUpload = upload.single('chunk');

// 1. Chunked Upload
app.post('/api/upload/chunk', (req, res, next) => {
    console.log('[UPLOAD] Starting chunk upload...');
    chunkUpload(req, res, (err) => {
        if (err) {
            console.error('[UPLOAD ERROR] Multer failed:', err);
            return res.status(500).json({ message: 'Upload transmission failed: ' + err.message });
        }
        console.log('[UPLOAD] Multer processed chunk. Body:', JSON.stringify(req.body));
        next();
    });
}, async (req, res) => {
    try {
        if (!gridfsBucket) {
            return res.status(503).json({ message: 'Server initializing, please wait...' });
        }

        const { uploadId, chunkIndex, totalChunks, fileName } = req.body;
        const chunk = req.file;

        if (!uploadId || !chunk || !fileName) {
            console.error('[UPLOAD ERROR] Missing data. UploadId:', uploadId, 'File:', !!chunk);
            return res.status(400).json({ message: 'Missing chunk data' });
        }

        // Ensure tempDir is safe
        const safeTempDir = path.join(__dirname, 'temp');
        if (!fs.existsSync(safeTempDir)) fs.mkdirSync(safeTempDir);

        const chunkDir = path.join(safeTempDir, uploadId);
        // Use recursive: true to prevent race conditions
        if (!fs.existsSync(chunkDir)) {
            fs.mkdirSync(chunkDir, { recursive: true });
        }

        const chunkPath = path.join(chunkDir, `${chunkIndex}`);

        let retries = 3;
        while (retries > 0) {
            try {
                fs.renameSync(chunk.path, chunkPath);
                break;
            } catch (err) {
                console.log(`Rename failed, retrying... (${retries})`);
                retries--;
                if (retries === 0) {
                    try {
                        fs.copyFileSync(chunk.path, chunkPath);
                        fs.unlinkSync(chunk.path);
                    } catch (copyErr) {
                        console.error('Move chunk failed:', copyErr);
                        return res.status(500).json({ message: 'Failed to process upload chunk' });
                    }
                }
                await new Promise(r => setTimeout(r, 100));
            }
        }

        const currentChunks = fs.readdirSync(chunkDir).length;
        if (currentChunks === parseInt(totalChunks)) {
            const finalFileName = `${Date.now()}-${fileName}`;
            const uploadStream = gridfsBucket.openUploadStream(finalFileName);

            const host = req.get('host');
            const protocol = req.protocol;
            const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
            const baseUrl = isLocal ? `${protocol}://${host}` : (process.env.RENDER_EXTERNAL_URL || `${protocol}://${host}`);

            // Sequentially pipe chunks
            for (let i = 0; i < totalChunks; i++) {
                const chunkP = path.join(chunkDir, `${i}`);
                await new Promise((resolve, reject) => {
                    const readStream = fs.createReadStream(chunkP);
                    readStream.pipe(uploadStream, { end: false });
                    readStream.on('end', () => {
                        fs.unlinkSync(chunkP);
                        resolve();
                    });
                    readStream.on('error', reject);
                });
            }

            uploadStream.end();
            fs.rmdirSync(chunkDir);

            await new Promise((resolve, reject) => {
                uploadStream.on('finish', resolve);
                uploadStream.on('error', reject);
            });

            return res.status(200).json({
                completed: true,
                url: `${baseUrl}/api/file/${finalFileName}`,
                type: fileName.match(/\.(mp4|mov|avi|webm|mkv|3gp|flv|wmv)$/i) ? 'video' : 'image'
            });
        }

        res.status(200).json({ completed: false });

    } catch (error) {
        console.error('Chunk Upload Error:', error);
        res.status(500).json({ message: 'Chunk upload failed' });
    }
});

// 2. Reviews / Standard Upload
app.post('/api/reviews', upload.array('media'), async (req, res) => {
    try {
        console.log('[REVIEW SUBMISSION] Received Body');

        if (!gridfsBucket) {
            return res.status(503).json({ message: 'Server initializing, please wait...' });
        }

        const { title, description, foodReview, roomReview, vehicleReview, rating, userEmail, type } = req.body;

        const OWNER_EMAILS = ["dhanatrip2020@gmail.com"];
        if (type === 'memory' && !OWNER_EMAILS.includes(userEmail)) {
            return res.status(403).json({ message: 'Only owners can add to Gallery/Memories.' });
        }

        const host = req.get('host');
        const protocol = req.protocol;
        const isLocal = host.includes('localhost') || host.includes('127.0.0.1');
        const baseUrl = isLocal ? `${protocol}://${host}` : (process.env.RENDER_EXTERNAL_URL || `${protocol}://${host}`);

        // 1. Files uploaded via Multer -> Move to GridFS
        const mediaFiles = [];
        if (req.files) {
            for (const file of req.files) {
                const finalFileName = `${Date.now()}-${file.originalname}`;
                const uploadStream = gridfsBucket.openUploadStream(finalFileName, {
                    contentType: file.mimetype
                });
                const readStream = fs.createReadStream(file.path);

                readStream.pipe(uploadStream);

                await new Promise((resolve, reject) => {
                    uploadStream.on('finish', resolve);
                    uploadStream.on('error', reject);
                });

                // Delete local temp file
                fs.unlinkSync(file.path);

                mediaFiles.push({
                    url: `${baseUrl}/api/file/${finalFileName}`,
                    type: file.mimetype.startsWith('video') ? 'video' : 'image'
                });
            }
        }

        // 2. Pre-uploaded files
        let preUploadedMedia = [];
        if (req.body.preUploadedMedia) {
            try {
                preUploadedMedia = typeof req.body.preUploadedMedia === 'string'
                    ? JSON.parse(req.body.preUploadedMedia)
                    : req.body.preUploadedMedia;
            } catch (e) {
                console.error('Error parsing preUploadedMedia:', e);
            }
        }

        const finalMedia = [...mediaFiles, ...preUploadedMedia];

        const newReview = new Review({
            title,
            description,
            foodReview,
            roomReview,
            vehicleReview,
            rating,
            userEmail,
            type: type || 'review',
            media: finalMedia
        });

        await newReview.save();

        res.status(201).json({ message: 'Added successfully!', review: newReview });

    } catch (error) {
        console.error('Post Review Error:', error);
        res.status(500).json({ message: 'Failed to add review: ' + error.message });
    }
});

// ... (Other routes remain: Register, Login, Forms, etc. - ensure they are below)


// 1. User Registration
app.post('/api/users/register', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: { id: newUser._id, name: newUser.name, email: newUser.email }
        });

    } catch (error) {
        console.error('Registration Error:', error);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

// 2. User Login
app.post('/api/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Token expires in 30 days for persistent login
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

// 3. Form Submission (Booking)
app.post('/api/forms/submit', async (req, res) => {
    try {
        const formData = req.body;
        console.log('[BOOKING] New booking received:', formData);

        const newBooking = new Booking(formData);
        await newBooking.save();

        // sendEmailNotification(formData); // Optional

        res.status(200).json({ message: 'Booking submitted successfully!' });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ message: 'Failed to save booking.' });
    }
});

// GET All Bookings (Admin)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ submittedAt: -1 });
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Fetch Bookings Error:', error);
        res.status(500).json({ message: 'Failed to fetch bookings.' });
    }
});

// UPDATE Booking (Admin)
app.put('/api/bookings/:id', async (req, res) => {
    try {
        const { price, status } = req.body;
        const booking = await Booking.findById(req.params.id);

        if (!booking) return res.status(404).json({ message: 'Booking not found' });

        if (price !== undefined) booking.price = price;
        if (status) booking.status = status;

        await booking.save();
        res.status(200).json(booking);
    } catch (error) {
        console.error('Update Booking Error:', error);
        res.status(500).json({ message: 'Failed to update booking.' });
    }
});

// 4. Reviews & Memories
// GET Reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const { type } = req.query;
        let filter = {};
        if (type) filter.type = type;

        const reviews = await Review.find(filter).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Get Reviews Error:', error);
        res.status(500).json({ message: 'Failed to fetch reviews.' });
    }
});

// LIKE Review
app.put('/api/reviews/:id/like', async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ message: 'Review not found' });

        review.likes += 1;
        await review.save();
        res.status(200).json({ likes: review.likes });
    } catch (error) {
        console.error('Like Error:', error);
        res.status(500).json({ message: 'Failed to like review.' });
    }
});

// DELETE Review
app.delete('/api/reviews/:id', async (req, res) => {
    try {
        const { userEmail } = req.body;
        const review = await Review.findById(req.params.id);
        const OWNER_EMAILS = ["dhanatrip2020@gmail.com"];

        if (!review) return res.status(404).json({ message: 'Review not found' });

        if (review.type === 'memory' && !OWNER_EMAILS.includes(userEmail)) {
            return res.status(403).json({ message: 'Unauthorized: Only owners can delete memories.' });
        }

        if (review.type === 'review' && !OWNER_EMAILS.includes(userEmail) && review.userEmail !== userEmail) {
            return res.status(403).json({ message: 'Unauthorized' });
        }

        await Review.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted successfully' });
    } catch (error) {
        console.error('Delete Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Optional: Email Helper (Basic Setup)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Pack Yours Backend with MongoDB, GridFS (v3) is running!');
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({ message: 'Internal Server Error: ' + err.message });
});

// Start Server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT} (v3 with GridFS & Restored Routes)`);
});

server.setTimeout(30 * 60 * 1000);
