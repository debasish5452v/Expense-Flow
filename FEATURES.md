# ExpenseFlow - Technical Implementation Details

## Architecture Overview

ExpenseFlow is built using the MERN stack with a focus on scalability, security, and user experience.

### Backend Architecture
- **Framework**: Express.js with Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **File Upload**: Multer middleware
- **Data Export**: XLSX library

### Frontend Architecture
- **Framework**: React 19 with Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts library
- **HTTP Client**: Axios with interceptors
- **State Management**: Context API

---

## Key Features & Implementation

### 1. Secure Authentication System
**Implementation:**
- JWT tokens with secure secret keys
- Password hashing using bcryptjs (10 salt rounds)
- Token validation middleware for protected routes
- Automatic token expiration handling

**Security Measures:**
- HTTP-only token storage recommendations
- Password strength validation
- Email format verification
- CORS configuration for secure cross-origin requests

### 2. Real-time Dashboard Analytics
**Implementation:**
- Aggregation pipelines for financial calculations
- Real-time balance computation (Income - Expenses)
- Recent transaction fetching with MongoDB queries
- Efficient data caching strategies

**Features:**
- Total balance display
- Income/Expense summaries
- Last 30 days expense tracking
- Recent transaction lists with timestamps

### 3. Income Management System
**Technical Details:**
- RESTful API endpoints for CRUD operations
- MongoDB schema with validation
- Emoji picker integration for visual categorization
- Excel export with formatted columns

**Database Schema:**
```javascript
{
  user: ObjectId (ref: User),
  title: String,
  amount: Number,
  date: Date,
  category: String,
  description: String,
  emoji: String,
  createdAt: Timestamp
}
```

### 4. Expense Tracking
**Implementation:**
- Category-based expense organization
- Date-range filtering capabilities
- Sorting and search functionality
- Delete confirmation with React state management

**Features:**
- Multiple expense categories
- Emoji-based visual identification
- Quick delete with hover effects
- Responsive card layouts

### 5. Interactive Data Visualization
**Charts Implemented:**
- **Bar Chart**: Monthly expense comparison
- **Pie Chart**: Category-wise expense distribution
- **Line Chart**: Income/Expense trends over time

**Custom Components:**
- Custom tooltips for detailed information
- Responsive legends
- Color-coded data representation
- Mobile-optimized chart views

### 6. Excel Report Generation
**Implementation:**
- Server-side XLSX file generation
- Custom headers and formatting
- Date formatting for readability
- Automatic download handling

**Export Features:**
- Income report with all transactions
- Expense report with categories
- Formatted currency values
- Date-sorted data

### 7. Profile Image Upload
**Technical Implementation:**
- Multer middleware configuration
- File type validation (images only)
- File size limiting (5MB max)
- Secure filename generation
- Static file serving

**Storage:**
- Local filesystem storage in `uploads/` directory
- Unique filename generation to prevent conflicts
- Public URL generation for frontend access

### 8. Responsive UI Design
**Implementation:**
- Mobile-first approach with Tailwind CSS
- Breakpoint-based layout adjustments
- Touch-friendly interface elements
- Hamburger menu for mobile navigation

**Design Elements:**
- Gradient backgrounds
- Card-based layouts
- Smooth transitions and animations
- Consistent color scheme (Indigo/Purple theme)

---

## Database Design

### Collections

#### Users Collection
```javascript
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String (unique, required),
  password: String (hashed),
  profileImg: String,
  createdAt: Date
}
```

#### Income Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: Users),
  title: String,
  amount: Number,
  date: Date,
  category: String,
  description: String,
  emoji: String,
  createdAt: Date
}
```

#### Expense Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: Users),
  title: String,
  amount: Number,
  date: Date,
  category: String,
  description: String,
  emoji: String,
  createdAt: Date
}
```

---

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login

### Dashboard
- `GET /api/v1/dashboard/overview` - Get financial overview

### Income
- `GET /api/v1/income` - Get all income records
- `POST /api/v1/income` - Add new income
- `DELETE /api/v1/income/:id` - Delete income
- `GET /api/v1/income/export` - Export to Excel

### Expense
- `GET /api/v1/expense` - Get all expenses
- `POST /api/v1/expense` - Add new expense
- `DELETE /api/v1/expense/:id` - Delete expense
- `GET /api/v1/expense/export` - Export to Excel

---

## Performance Optimizations

1. **Database Indexing**: Email and user ID indexes for faster queries
2. **Lazy Loading**: Components loaded on-demand
3. **Optimized Images**: Compressed profile images
4. **Efficient Queries**: Mongoose query optimization
5. **Caching**: Browser caching for static assets

---

## Security Features

1. **JWT Authentication**: Secure token-based auth
2. **Password Hashing**: bcryptjs with salt rounds
3. **CORS Protection**: Configured allowed origins
4. **Input Validation**: Server and client-side validation
5. **File Upload Security**: Type and size restrictions

---

## Future Enhancements

- [ ] Budget planning and alerts
- [ ] Multi-currency support
- [ ] Recurring transactions
- [ ] Category customization
- [ ] Data backup and restore
- [ ] Mobile app version
- [ ] Email notifications
- [ ] Advanced analytics with AI insights

---

## Technologies Used

### Frontend
- React 19.1.0
- Vite 7.0.3
- Tailwind CSS 4.1.11
- Recharts 3.1.0
- Axios 1.10.0
- React Router DOM 7.6.3
- React Hot Toast 2.5.2
- Emoji Picker React 4.12.3

### Backend
- Node.js
- Express 5.1.0
- MongoDB 8.16.3
- Mongoose 8.16.3
- JWT 9.0.2
- bcryptjs 3.0.2
- Multer 2.0.1
- XLSX 0.18.5
- CORS 2.8.5

---

## Development Practices

- Clean code architecture
- RESTful API design principles
- Component-based UI development
- Responsive design patterns
- Error handling and logging
- Environment-based configuration
- Git version control

---

**Built with ❤️ for efficient personal finance management**
