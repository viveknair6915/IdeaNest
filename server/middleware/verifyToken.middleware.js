const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ error: "You're not authenticated!" });
        }
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};

module.exports = verifyToken;
