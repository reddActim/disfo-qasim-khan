const Discussion = require('../models/discussion.model');
const User = require('../models/user.model');

const addDisscussion = async (req, res) => {
    const { title, author, content } = req.body;

    // check if author is a legitimate (active) user
    let userExists;
    try {
        userExists = await User.findOne({
            $or: [{ username: author }, { email: author }, { fullName: author }],
        });
    } catch (e) {
        console.log("error while fetching data from db: ", e);
        res.status(500).json({ message: `internal server error ${e}` })
    }
    if (!userExists) {
        res.status(404).json({ message: "user not found" });
    }
    const discussion = new Discussion({
        title,
        author,
        content,
    })
    let savedDiscussion;
    try {
        savedDiscussion = await discussion.save();
    } catch (e) {
        res.status(500).json({ message: `internal server error ${e}` })
    }
    res.status(200).json(savedDiscussion);
};

module.exports = {
    addDisscussion
};