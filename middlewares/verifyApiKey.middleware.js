require('dotenv').config();

const verifyApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const validApiKey = process.env.X_API_KEY;

    if (!apiKey || apiKey !== validApiKey) {
        return res.status(403).json({ message: "Unauthorised Access" });
    }

    next();
};

module.exports = verifyApiKey;
