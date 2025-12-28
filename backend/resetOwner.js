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

async function resetOwner() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const email = 'dhanatrip2020@gmail.com';
        const password = 'Dhanatrip@007';

        // Delete existing to be safe
        await User.deleteOne({ email });
        console.log(`Deleted existing user with email: ${email}`);

        // Create new
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: 'Dhana Tours',
            email: email,
            phone: '9999999999',
            password: hashedPassword
        });

        await newUser.save();
        console.log('---------------------------------------------------');
        console.log('✅ OWNER ACCOUNT RESET SUCCESSFULLY');
        console.log(`📧 Email:    ${email}`);
        console.log(`🔑 Password: ${password}`);
        console.log('---------------------------------------------------');

        process.exit(0);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    }
}

resetOwner();
