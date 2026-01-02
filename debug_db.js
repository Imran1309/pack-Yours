const mongoose = require('mongoose');
require('dotenv').config({ path: './Backend/.env' });

const ReviewSchema = new mongoose.Schema({
    title: String,
    media: [{
        url: String,
        type: String
    }],
    createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', ReviewSchema);

async function checkReviews() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const reviews = await Review.find().sort({ createdAt: -1 }).limit(5);
        console.log('Last 5 Reviews:');
        console.log(JSON.stringify(reviews, null, 2));

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

checkReviews();
