# ExpenseFlow – Personal Finance Management System

ExpenseFlow is a full-stack MERN application designed for comprehensive financial tracking and management. Track your income and expenses, visualize spending patterns through interactive charts, and gain insights into your financial health with an intuitive dashboard interface.

## Features

1. **User Authentication**  
   Secure sign-up and login using JWT. User sessions are protected and persisted.

2. **Dashboard Overview**  
   View total balance, income, and expenses in summary cards, with recent transactions and financial charts.

3. **Income Management**  
   - Add, view, and delete income sources.
   - Download all income data as an Excel file.

4. **Expense Management**  
   - Add, view, and delete expenses with category-based tracking.
   - Download all expense data as an Excel file.

5. **Interactive Charts**  
   Visualize income and expenses with Bar, Pie, and Line charts for better insights.

6. **Recent Transactions**  
   Quickly access the latest income and expense records.

7. **Reports**  
   Export income and expense data to Excel for offline analysis.

8. **Mobile Responsive UI**  
   Works seamlessly across desktops, tablets, and mobile devices.

9. **Intuitive Navigation**  
   Sidebar menu for easy access to Dashboard, Income, Expenses, and Logout.

10. **Quick Delete**  
    Hover over income/expense cards to reveal a delete button for easy removal.

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Recharts, Axios, React Router, Emoji Picker  
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, Multer, XLSX  
- **Authentication:** JWT (JSON Web Tokens)  
- **File Uploads:** Multer (for profile images)  
- **Excel Export:** XLSX

---

## Project Structure

```
backend/
  config/
  controller/
  middlewares/
  models/
  routes/
  uploads/
  .env.example
  server.js

frontend/
  expense-tracker/
    src/
      components/
      context/
      hooks/
      pages/
      utils/
    index.html
    package.json
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher) & npm
- MongoDB database (local or Atlas)

### Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd ExpenseFlow
   ```

2. **Backend Setup:**
   ```sh
   cd backend
   npm install
   ```
   
   Create a `.env` file in the backend directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/expenseflow
   JWT_SECRET=your_secure_jwt_secret_here
   PORT=8000
   CLIENT_URL=http://localhost:5173
   ```

3. **Frontend Setup:**
   ```sh
   cd frontend/expense-tracker
   npm install
   ```

4. **Start the Application:**
   
   In one terminal (backend):
   ```sh
   cd backend
   npm start
   ```
   
   In another terminal (frontend):
   ```sh
   cd frontend/expense-tracker
   npm run dev
   ```

5. **Access the Application:**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:8000`

---

## Key Features Implementation

### Authentication System
- JWT-based secure authentication with token expiry
- Password hashing using bcryptjs
- Protected routes with middleware authentication

### Data Visualization
- Custom chart components built with Recharts library
- Real-time data updates and filtering
- Responsive chart design for mobile devices

### File Management
- Multer integration for profile image uploads
- Automatic file validation and size limiting
- Secure file storage in uploads directory

### Excel Export
- XLSX library integration for data export
- Custom formatting for income/expense reports
- Date-wise transaction organization

---

## Usage Guide

### First Time Users
1. **Sign Up:** Create a new account with email and password
2. **Set Profile:** Upload a profile picture (optional)
3. **Dashboard:** Navigate to view your financial overview

### Managing Transactions
- **Add Income:** Click on Income tab, fill in details, and select an emoji icon
- **Add Expense:** Navigate to Expense section, categorize spending with emojis
- **View Analytics:** Dashboard shows spending patterns and trends
- **Export Data:** Download Excel reports for offline analysis

### Tips for Best Experience
- Use descriptive titles for transactions
- Pick relevant emoji icons for quick visual identification
- Regularly export data for backup
- Check dashboard for spending insights

---

## Environment Variables

Backend `.env` example:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
CLIENT_URL=http://localhost:5173
```

---

## Project Highlights

### What Makes ExpenseFlow Special

1. **Modern Tech Stack**: Built with the latest versions of React 19, Vite 7, and Tailwind CSS 4
2. **Secure Authentication**: Industry-standard JWT authentication with bcrypt password hashing
3. **Rich Data Visualization**: Interactive charts using Recharts for meaningful financial insights
4. **Excel Integration**: Export your financial data for offline analysis and record-keeping
5. **Responsive Design**: Seamlessly works across desktop, tablet, and mobile devices
6. **User-Centric Design**: Intuitive interface with emoji-based transaction categorization
7. **RESTful API**: Well-structured backend following REST principles
8. **Real-time Updates**: Instant UI updates after any transaction changes

### Technical Achievements

- **Component Architecture**: Reusable React components for maintainable code
- **Custom Hooks**: Implemented custom hooks for authentication and data fetching
- **Context API**: Efficient global state management without external libraries
- **Middleware Pattern**: Authentication and file upload middleware for security
- **MongoDB Aggregation**: Complex queries for dashboard analytics
- **Error Handling**: Comprehensive error handling on both client and server
- **Environment Configuration**: Separate development and production configs

---

## Screenshots

### Auth pages
![Register](frontend/expense-tracker/image.png) 
![Login](frontend/expense-tracker/image-1.png)

### Dashboard pages
#### dashboard
![dashboard](frontend/expense-tracker/image-2.png)
#### income
![income](frontend/expense-tracker/image-3.png)
#### expense
![alt text](frontend/expense-tracker/image-4.png)

---

## License

MIT

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/)
- [Multer](https://github.com/expressjs/multer)
- [XLSX](https://github.com/SheetJS/sheetjs)

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

**ExpenseFlow – Your Personal Finance Companion**
