# ExpenseFlow Configuration Guide

## Environment Variables

### Backend Configuration

Create a `.env` file in the `backend` directory:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/expenseflow

# For MongoDB Atlas (cloud):
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/expenseflow?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_super_secure_jwt_secret_key_here_min_32_chars

# Server Configuration
PORT=8000
NODE_ENV=development

# Frontend URL (for CORS)
CLIENT_URL=http://localhost:5173
```

### Frontend Configuration

The frontend uses environment variables from Vite. Create `.env` file in `frontend/expense-tracker`:

```env
# API Base URL
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

---

## MongoDB Setup Options

### Option 1: Local MongoDB
1. Install MongoDB Community Edition from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Start MongoDB service:
   - Windows: MongoDB runs as a service automatically
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`
3. Use connection string: `mongodb://localhost:27017/expenseflow`

### Option 2: MongoDB Atlas (Cloud)
1. Create free account at [mongodb.com/atlas](https://www.mongodb.com/atlas/database)
2. Create a new cluster (free tier available)
3. Add your IP address to whitelist
4. Create database user with password
5. Get connection string and replace in `.env`

---

## JWT Secret Generation

Generate a secure JWT secret:

### Using Node.js
```javascript
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Using OpenSSL
```bash
openssl rand -base64 32
```

---

## Port Configuration

Default ports:
- **Backend**: 8000
- **Frontend**: 5173

To change ports:
1. Backend: Update `PORT` in `backend/.env`
2. Frontend: Update `vite.config.js`:
   ```javascript
   export default {
     server: {
       port: 3000 // your preferred port
     }
   }
   ```

---

## File Upload Configuration

### Maximum File Size
Default: 5MB for profile images

To change, edit `backend/middlewares/uploadMiddleware.js`:
```javascript
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB in bytes
  }
})
```

### Allowed File Types
Current: Images only (jpg, jpeg, png, gif)

Located in: `backend/middlewares/uploadMiddleware.js`

---

## CORS Configuration

### Development
Allows all origins (configured in `backend/server.js`):
```javascript
origin: process.env.CLIENT_URL || "*"
```

### Production
Update `CLIENT_URL` to your deployed frontend URL:
```env
CLIENT_URL=https://your-frontend-domain.com
```

---

## Database Indexes

For optimal performance, create indexes:

```javascript
// In MongoDB shell or Compass
db.users.createIndex({ email: 1 }, { unique: true })
db.income.createIndex({ user: 1, date: -1 })
db.expenses.createIndex({ user: 1, date: -1 })
```

---

## Troubleshooting

### MongoDB Connection Issues
- Verify MongoDB is running
- Check connection string format
- Ensure firewall allows MongoDB port (27017)
- For Atlas: Verify IP whitelist and user credentials

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8000 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
cd backend && npm install
cd frontend/expense-tracker && npm install
```

---

## Production Deployment

### Environment Variables for Production
```env
NODE_ENV=production
MONGO_URI=<production-mongodb-uri>
JWT_SECRET=<strong-secret-key>
CLIENT_URL=<production-frontend-url>
PORT=8000
```

### Build Frontend
```bash
cd frontend/expense-tracker
npm run build
```

### Serve Backend
```bash
cd backend
npm start
```

---

## Security Best Practices

1. **Never commit `.env` files** - Add to `.gitignore`
2. **Use strong JWT secrets** - Minimum 32 characters
3. **Enable MongoDB authentication** in production
4. **Use HTTPS** for production deployments
5. **Implement rate limiting** for API endpoints
6. **Validate all inputs** on both client and server
7. **Keep dependencies updated** - Run `npm audit` regularly

---

## Performance Optimization

### Backend
- Enable MongoDB connection pooling
- Implement response caching
- Use compression middleware
- Optimize database queries

### Frontend
- Enable code splitting
- Lazy load components
- Optimize images
- Use production build

---

For more configuration options, refer to:
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vite Configuration](https://vitejs.dev/config/)
- [React Best Practices](https://react.dev/)
