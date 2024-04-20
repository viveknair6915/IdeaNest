const User = require("../models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwt_secret = process.env.SECRET;

const registerController = async (req, res, next) => {
    try {
        const { username, email, password, typeOfUser } = req.body;
        console.log("username received in controller is: " + username);
        console.log("email received in controller is: " + email);
        console.log("password received in controller is: " + password);
        console.log("type received in controller is: " + typeOfUser);

        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ error: "User Already Exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });

        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ email: newUser.email, _id: newUser._id }, jwt_secret);

        res.status(200).json({ token });
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

        // Verify JWT token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Invalid Token!" });
            } else {
                // Set token in HTTPOnly cookie
                res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true });

                // Send user data and token in response
                res.status(200).json({ user, token });
            }
        });
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
