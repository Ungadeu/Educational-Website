const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MySQL
const sequelize = new Sequelize('stemWebsite', 'Adnaan-Thadathil', 'DESU2025', {
    host: 'localhost', // or your MySQL server host
    dialect: 'mysql',
});

// Define User model
const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    bio: { type: DataTypes.TEXT },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    joinDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    accountStatus: { type: DataTypes.STRING, defaultValue: 'Active' },
    lastActive: { type: DataTypes.STRING },
    profilePicture: { type: DataTypes.STRING },
});

// Sync models with the database
sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
});

// API endpoint to fetch a user by ID
app.get('/user/:email', async (req, res) => {
    const email = req.params.email; // Get the email from the request parameters
    try {
        const user = await User.findOne({ where: { email } }); // Fetch user by email
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user); // Send the user data as JSON
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Create and save the sample user
async function createSampleUser() {
    try {
        const sampleUser = await User.create({
            firstName: 'John',
            lastName: 'Doe',
            bio: 'Interested in civil engineering. Likes playing tennis and video games. Enjoys drinking coffee and eating pasta.',
            email: 'john.doe@example.com',
            joinDate: new Date('2025-04-13'),
            accountStatus: 'Active',
            lastActive: '8 hours ago',
            profilePicture: '../Images/user_5735921.png',
        });

        console.log('Sample user created successfully:', sampleUser.toJSON());
    } catch (error) {
        console.error('Error creating sample user:', error);
    }
}

async function createSampleUser2() {
    try {
        const sampleUser = await User.create({
            firstName: 'Adnaan',
            lastName: 'Thadathil',
            bio: 'Interested in Full Stack Web Development. Likes reading books and playing video games. Enjoys drinking tea and eating sushi.',
            email: 'Adnaan.Thadathil@example.com',
            joinDate: new Date('2025-04-26'),
            accountStatus: 'Active',
            lastActive: '3 hours ago',
            profilePicture: '../Images/Adnaan_UserImage.jpg',
        });

        console.log('Sample user created successfully:', sampleUser.toJSON());
    } catch (error) {
        console.error('Error creating sample user:', error);
    }
}
// Call the function
createSampleUser();
createSampleUser2();