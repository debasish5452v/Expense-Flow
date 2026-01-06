require("dotenv").config()
const cors = require("cors")
const path = require("path")

const express = require("express")
const app = express()

const connectDB = require("./config/db.js")
const authRoutes = require("./routes/authRoutes.js")
const incomeRoutes = require("./routes/incomeRoutes.js")
const expenseRoutes = require("./routes/expenseRoutes.js")
const dashboardRoutes = require("./routes/dashboardRoutes.js")

// CORS Configuration - Allow cross-origin requests from frontend
// This enables the React frontend to communicate with the Express backend
app.use(
    cors({
        origin: function (origin, callback) {
            // Allow requests with no origin (like mobile apps or Postman)
            if (!origin) return callback(null, true);
            
            // Allow all Vercel deployment URLs and the configured CLIENT_URL
            const allowedOrigins = [
                process.env.CLIENT_URL,
                /^https:\/\/expense-flow.*\.vercel\.app$/,  // All Vercel preview deployments
            ];
            
            // Check if origin matches any allowed pattern
            const isAllowed = allowedOrigins.some(pattern => {
                if (typeof pattern === 'string') return pattern === origin;
                if (pattern instanceof RegExp) return pattern.test(origin);
                return false;
            });
            
            if (isAllowed) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-type", "Authorization"],
        credentials: true
    })
)

// Parse incoming JSON requests
app.use(express.json());

// Initialize MongoDB connection
connectDB();

// API Routes Configuration
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Serve static files from uploads directory for profile images
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'ExpenseFlow API Server', 
        status: 'Running',
        version: '1.0.0'
    });
});

const port = process.env.PORT || 5000;

// Start server
const server = app.listen(port, () => {
    console.log(`🚀 ExpenseFlow API server running on port ${port}`)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('❌ Unhandled Promise Rejection:', err.message);
    console.error(err);
    // Keep server running even on unhandled rejections
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err.message);
    console.error(err);
    // Keep server running even on uncaught exceptions
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received. Shutting down gracefully...');
    server.close(() => {
        console.log('✅ Server closed');
        process.exit(0);
    });
});