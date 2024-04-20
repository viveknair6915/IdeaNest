const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI || !process.env.DBNAME) {
            throw new Error("MONGO_URI or DBNAME is missing in environment variables");
        }
        console.log("Trying to Connect to db")
        const connection = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DBNAME}`);
        
        console.log("Database Connected Successfully!!");
        return connection;
    } catch (error) {
        console.error("Error In Connecting Database", error);
        throw error;
    }
}

module.exports = connectDB;
