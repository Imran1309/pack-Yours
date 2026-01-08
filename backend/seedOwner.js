const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

async function createOwner() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const email = 'dhanatrip2020@gmail.com';
        const password = 'Dhanatrip@007';

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log('Owner account already exists.');

            // Optional: Update password if it exists
            const salt = await bcrypt.genSalt(10);
            existingUser.password = await bcrypt.hash(password, salt);
            await existingUser.save();
            console.log('Updated existing owner password.');

        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new User({
                name: 'Dhana Trip',
                email: email,
                phone: '0000000000', // Placeholder
                password: hashedPassword
            });

            await newUser.save();
            console.log('Created new owner account successfully.');
        }

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

createOwner();
