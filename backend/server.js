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
app.use(express.json());
// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// -----------------------------------------------------------------------------
// Models
// -----------------------------------------------------------------------------

// User Model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

// Booking Model
const BookingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: Date, required: true },
    people: { type: String, required: true },
    vacationType: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional link to user
    submittedAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);

// Review/Memory Model
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
        type: { type: String, default: 'image' } // 'image' or 'video'
    }],
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', ReviewSchema);

// -----------------------------------------------------------------------------
// Multer Setup for File Uploads
// -----------------------------------------------------------------------------
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------

// 1. User Registration
app.post('/api/users/register', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        // Validation
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }

        // Check user existence
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User
        const newUser = new User({
            name,
            email,
            phone,
            password: hashedPassword
        });

        await newUser.save();

        // Generate Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

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

        // Check for user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Generate Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

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

        // Optional: Send Email Notification
        sendEmailNotification(formData);

        res.status(200).json({ message: 'Booking submitted successfully!' });
    } catch (error) {
        console.error('Booking Error:', error);
        res.status(500).json({ message: 'Failed to save booking.' });
    }
});

// GET All Bookings (Admin)
app.get('/api/bookings', async (req, res) => {
    try {
        // In a real app, verify token/admin status here
        const bookings = await Booking.find().sort({ submittedAt: -1 });
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Fetch Bookings Error:', error);
        res.status(500).json({ message: 'Failed to fetch bookings.' });
    }
});

// 4. Reviews & Memories
// GET Reviews
app.get('/api/reviews', async (req, res) => {
    try {
        const { type } = req.query;
        let filter = {};
        if (type) {
            filter.type = type;
        }

        // Sort by newest first
        const reviews = await Review.find(filter).sort({ createdAt: -1 });
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Get Reviews Error:', error);
        res.status(500).json({ message: 'Failed to fetch reviews.' });
    }
});

// POST Review/Memory (with file upload)
const OWNER_EMAILS = ["dhanatrip2020@gmail.com"];

app.post('/api/reviews', upload.array('media'), async (req, res) => {
    try {
        const { title, description, foodReview, roomReview, vehicleReview, rating, userEmail, type } = req.body;

        // Backend Validation for Gallery/Memory permission
        if (type === 'memory' && !OWNER_EMAILS.includes(userEmail)) {
            return res.status(403).json({ message: 'Only owners can add to Gallery/Memories.' });
        }

        const mediaFiles = req.files ? req.files.map(file => ({
            url: `http://localhost:${PORT}/uploads/${file.filename}`,
            type: file.mimetype.startsWith('video') ? 'video' : 'image'
        })) : [];

        const newReview = new Review({
            title,
            description,
            foodReview,
            roomReview,
            vehicleReview,
            rating,
            userEmail,
            type: type || 'review',
            media: mediaFiles
        });

        await newReview.save();

        res.status(201).json({ message: 'Added successfully!', review: newReview });


    } catch (error) {
        console.error('Post Review Error:', error);
        res.status(500).json({ message: 'Failed to add review.' });
    }
});

// DELETE Review
app.delete('/api/reviews/:id', async (req, res) => {
    try {
        const { userEmail } = req.body;
        const review = await Review.findById(req.params.id);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        // If it's a memory, strictly enforce owner email
        // If it's a review, ideally only the creator or owner can delete
        if (review.type === 'memory' && !OWNER_EMAILS.includes(userEmail)) {
            return res.status(403).json({ message: 'Unauthorized: Only owners can delete memories.' });
        }

        // For now, allow owner to delete ANY review as well (moderation)
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

function sendEmailNotification(data) {
    const mailOptions = {
        from: `"Pack Yours Booking" <${process.env.EMAIL_USER}>`,
        to: "dhanatrip2020@gmail.com",
        replyTo: data.email, // Allows owner to directly reply to the customer
        subject: `✈️ Booking Request: ${data.name} - ${data.destination}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #f39c12; padding-bottom: 10px;">New Trip Inquiry</h2>
                
                <div style="margin-top: 20px;">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Phone:</strong> <a href="tel:${data.phone}" style="color: #2980b9;">${data.phone}</a></p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #2980b9;">${data.email}</a></p>
                </div>

                <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin-top: 15px; border: 1px solid #eee;">
                    <p style="margin: 5px 0;"><strong>Destination:</strong> <span style="color: #e67e22; font-weight: bold;">${data.destination}</span></p>
                    <p style="margin: 5px 0;"><strong>Date:</strong> ${new Date(data.date).toDateString()}</p>
                    <p style="margin: 5px 0;"><strong>People:</strong> ${data.people}</p>
                    <p style="margin: 5px 0;"><strong>Vacation Type:</strong> ${data.vacationType}</p>
                </div>

                <div style="margin-top: 20px; font-size: 12px; color: #7f8c8d; text-align: center;">
                    <p>Submitted via <strong>Pack Yours App</strong></p>
                </div>
            </div>
        `,
        text: `
New Booking Application
-----------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Destination: ${data.destination}
Date: ${data.date}
People: ${data.people}
Vacation Type: ${data.vacationType}
        `.trim()
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error sending email:', error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// Root endpoint
app.get('/', (req, res) => {
    res.send('Pack Yours Backend with MongoDB is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
