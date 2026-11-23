const User = require('../models/user.model');

const registerUser = async (req, res) => {
    try {
        const { fullName, username, email } = req.body;

        // Check if user with same username or email already exists
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Failed to create new user",
                reason: "Already Exists in DB"
            });
        }

        const newUser = new User({
            fullName: fullName,
            username,
            email
        });

        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({
                message: "Failed to create new user",
                reason: "Already Exists in DB"
            });
        }
        return res.status(500).json({
            message: "Failed to save the user to DB",
            error: error.message
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!users || users.length === 0) {
            return res.status(404).json({
                message: "No Users found"
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to return users from DB",
            error: error.message
        });
    }
};

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                message: "User not found!",
                username
            });
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch user from DB",
            error: error.message
        });
    }
};

module.exports = {
    registerUser,
    getAllUsers,
    getUserByUsername
};
