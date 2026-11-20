const express = require('express');
const PORT = 8089;

const server = express();

server.get("/api/v1/messages", (req, res) => {
    return res.status(200).json({ message: "Hello World" });
})

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});