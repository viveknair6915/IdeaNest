const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    // Founder Or Investor
    typeOfUser: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    location: {
        type: String,
    },
    companyName: {
        type: String,
        required: true
    },
    // medical ,fintech or digital etc
    typeOfCompany: {
        type: String,
        required: true
    },
    likes: {
        type: Number
    },
    bio: {
        type: String,
        trim: true
    },
    profilePicture: {
        type: String,
        defalut: ""
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }],


}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

module.exports = User