const { validateDiscussion } = require("../validations/discussion.validator");

const validaDiscussionerMiddleware = (req, res, next) => {
    const { error, value } = validateDiscussion(req.body);
    if (error) {
        return res.status(442).json({
            message: "Invalid input data in middleware",
            error: error.details ? error.details[0].message : error.message
        });
    }
    req.body = value;
    next();
};

module.exports = validaDiscussionerMiddleware;
