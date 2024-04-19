const User = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_secret = process.env.SECRET;

const registerController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        console.log("username recieved in controller is: " + username)
        console.log("email recieved in controller is: " + email)
        console.log("password recieved in controller is: " + password)

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new User({
            ...req.body,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        next(error);
    }
};

const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User Not Found! Please Register" });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ error: "Wrong Password!" });
        }
        const token = jwt.sign({ _id: user._id }, jwt_secret, { expiresIn: process.env.JWT_EXPIRE });
        res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true }).status(200).json({ user, token });
    } catch (error) {
        next(error);
    }
};

const logoutController = async (req, res, next) => {
    try {
        res.clearCookie("token", { httpOnly: true, sameSite: "none", secure: true }).status(200).json({ msg: "Logged out Successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { registerController, loginController, logoutController };
