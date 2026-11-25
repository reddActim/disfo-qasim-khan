const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const userRoutes = require('./routes/user.routes');
const discussionRoutes = require('./routes/discussion.routes');
const PORT = process.env.PORT || 8082;

const server = express();

// Universal middleware for parsing JSON request bodies
server.use(express.json());

// User routes
server.use('/user', userRoutes);

//Discussion routes
server.use('/discussions', discussionRoutes);

server.get("/api/v1/messages", (req, res) => {
    return res.status(200).json({ message: "Hello World" });
});

const MONGO_URI = process.env.MONGODB_URI;
mongoose.connect(MONGO_URI)
    .then(() => console.log("DB connected SuccessFully "))
    .catch(e => {
        console.log(e);
        process.exit(1);
    });

server.listen(PORT, () => {
    console.log(`Server Listening at PORT ${PORT}`);
});
