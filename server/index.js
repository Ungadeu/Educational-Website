const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


// initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Adnaan-Thadathil:GptyfYkPipDzXO8r@usersdatabase.llhaxmo.mongodb.net/';
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err)); 

// user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: {type: String},
    email: {type: String, required: true, unique: true},
    joinDate: {type : Date, default: Date.now},
    accountStatus: {type: String, default: 'active'},
    lastActive: {type: String},
    profilePicture: {type: String},
});

const User = mongoose.model('User', userSchema);

app.use(express.static(path.join(__dirname, 'userpage')));

// api endpoint to get users by email
app.get('/user/:email', async (req, res) => {
    try {
        const email = req.params.email; // Extract email from the URL
        const user = await User.findOne({ email }); // Query the database by email

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user); // Send the user data as JSON
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create and save the sample user
async function createSampleUser() {
    try {
        const sampleUser = new User({
            firstName: 'John',
            lastName: 'Doe',
            bio: 'Interested in civil engineering. Likes playing tennis and video games. Enjoys drinking coffee and eating pasta.',
            email: 'john.doe@example.com',
            joinDate: new Date('2025-04-13'),
            accountStatus: 'Active',
            lastActive: '8 hours ago',
            profilePicture: '../Images/user_5735921.png',
        });

        await sampleUser.save();
        console.log('Sample user created successfully.');
    } catch (error) {
        console.error('Error creating sample user:', error);
    }
}

// Call the function
createSampleUser();