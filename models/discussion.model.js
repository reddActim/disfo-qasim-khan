const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const discussionSchema = new Schema(
    {
        title: {
            type: String,
            maxlength: 150,
            required: true,
        },
        author: {
            type: String,
            required: true,
            immutable: true,
        },
        content: {
            type: String,
            default: "",
        },        
    }
);

const Discussion = model("Discussion", discussionSchema);
module.exports = Discussion;
