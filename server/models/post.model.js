const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption: {
        type: String,
        trim: true
    },
    description: {
        type: String
    },
    pitch: {
        type: String
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]


}, { timestamp: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;