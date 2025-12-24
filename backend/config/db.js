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
        console.error("\n⚠️  MongoDB Connection Failed!");
        console.error("📋 Please ensure MongoDB is running:");
        console.error("   - Local: Start MongoDB service");
        console.error("   - Cloud: Use MongoDB Atlas (free tier available)");
        console.error("   - Update MONGO_URI in backend/.env");
        console.error("\nℹ️  For now, the server will continue without database connection.");
        console.error("   Some features may not work until MongoDB is connected.\n");
        // Don't exit - let server run for frontend testing
        // process.exit(1);
    }
}

module.exports = connectDB;