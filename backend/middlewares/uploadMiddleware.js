const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, 'uploads/')},
    filename: (req, file, cb) => {cb(null, `${Date.now()}-${file.originalname}`)}
})

// file filter
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error("Only .jpeg . png .jpg formats are allowed"), false)
    }
}

const upload = multer({ storage, fileFilter });

module.exports = upload;