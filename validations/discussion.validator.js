const Joi = require("joi");

const discussionValidationSchema = Joi.object({
    title: Joi.string().max(150).required(),
    author: Joi.string().required(),
    content: Joi.string().default("").allow(""),
});

const validateDiscussion = (data) => {
    return discussionValidationSchema.validate(data);
};

module.exports = {
    validateDiscussion
};
