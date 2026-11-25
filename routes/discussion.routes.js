const express = require('express');
const router = express.Router();
const validaDiscussionerMiddleware = require("../middlewares/discussionValidation.middleware");
const { addDisscussion } = require("../controllers/discussion.controller");
const verifyApiKey = require("../middlewares/verifyApiKey.middleware");

router.post("/new", verifyApiKey, validaDiscussionerMiddleware, addDisscussion);

module.exports = router;
