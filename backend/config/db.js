require("dotenv").config()

const mongoose = require("mongoose")

/**
 * Initialize MongoDB Connection
 * Connects to MongoDB using the URI from environment variables
 * Implements error handling and connection logging
 */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("✅ MongoDB connected successfully");
        console.log(`📊 Database: ${mongoose.connection.name}`);
    } catch (err){
        console.error("❌ Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;