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

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer storage configuration for chunked uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Multer will temporarily store the chunk in the 'temp' directory
        cb(null, path.join(__dirname, 'temp'));
    },
    filename: function (req, file, cb) {
        // Use a generic filename, as we'll rename it immediately
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

// -----------------------------------------------------------------------------
// Chunked Upload Route (Bypass Cloudflare 100MB Limit)
// -----------------------------------------------------------------------------
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
}

app.post('/api/upload/chunk', upload.single('chunk'), async (req, res) => {
    try {
        const { uploadId, chunkIndex, totalChunks, fileName } = req.body;
        const chunk = req.file;

        if (!uploadId || !chunk || !fileName) {
            return res.status(400).json({ message: 'Missing chunk data' });
        }

        const chunkDir = path.join(tempDir, uploadId);
        if (!fs.existsSync(chunkDir)) {
            fs.mkdirSync(chunkDir);
        }

        // Move chunk to temp dir with index
        const chunkPath = path.join(chunkDir, `${chunkIndex}`);
        fs.renameSync(chunk.path, chunkPath);

        // Check if all chunks received
        const currentChunks = fs.readdirSync(chunkDir).length;
        if (currentChunks === parseInt(totalChunks)) {
            // Merge chunks
            const finalPath = path.join(__dirname, 'uploads', `${Date.now()}-${fileName}`);
            const writeStream = fs.createWriteStream(finalPath);

            for (let i = 0; i < totalChunks; i++) {
                const chunkP = path.join(chunkDir, `${i}`);
                const data = fs.readFileSync(chunkP);
                writeStream.write(data);
                fs.unlinkSync(chunkP); // Delete chunk
            }

            writeStream.end();
            fs.rmdirSync(chunkDir); // Remove temp dir

            const baseUrl = process.env.RENDER_EXTERNAL_URL || `${req.protocol}://${req.get('host')}`;
            return res.status(200).json({
                completed: true,
                url: `${baseUrl}/uploads/${path.basename(finalPath)}`,
                type: fileName.match(/\.(mp4|mov|avi)$/i) ? 'video' : 'image'
            });
        }

        res.status(200).json({ completed: false });

    } catch (error) {
        console.error('Chunk Upload Error:', error);
        res.status(500).json({ message: 'Chunk upload failed' });
    }
});
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ... (Models and other code remain the same) ...

// Start Server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT} (v2 with 500MB limit)`);
});

// Increase server timeout to 30 minutes for slow mobile uploads
server.setTimeout(30 * 60 * 1000);
