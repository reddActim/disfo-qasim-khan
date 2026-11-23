const { validateUser } = require('../validations/user.validator');

const validateUserMiddleware = (req, res, next) => {
    const { error, value } = validateUser(req.body);
    if (error) {
        return res.status(400).json({
            message: "Invalid input data in middleware",
            error: error.details ? error.details[0].message : error.message
        });
    }
    req.body = value;
    next();
};

module.exports = validateUserMiddleware;
