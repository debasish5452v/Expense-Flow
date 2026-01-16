# 💰 ExpenseFlow - Personal Finance Management System

A full-stack MERN application for tracking income and expenses with interactive dashboards and data visualization.

## ✨ Features
 
- 🔐 **User Authentication**: Secure signup/login with JWT authentication and password hashing
- 💵 **Income Tracking**: Add, view, and manage income sources with categories
- 💸 **Expense Management**: Track expenses with emoji-based categorization
- 📊 **Interactive Dashboard**: 
  - Real-time financial overview
  - Last 30 days expense trends
  - Income vs Expense comparison
  - Recent transactions history
- 📈 **Data Visualization**: 
  - Custom bar charts
  - Line charts for trends
  - Pie charts for category distribution
- 📥 **Export to Excel**: Download income/expense data in Excel format
- 👤 **Profile Management**: Upload and manage profile photos
- 🎨 **Modern UI**: Beautiful, responsive design with Tailwind CSS
- 🌙 **Dark Mode Support**: Eye-friendly dark theme

## 🛠️ Tech Stack

### Frontend
- **React 19.1.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library for data visualization
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **Emoji Picker React** - Emoji selector component
- **Moment.js** - Date manipulation

### Backend
- **Node.js** - Runtime environment
- **Express 5.1.0** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT (jsonwebtoken)** - Authentication tokens
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **XLSX** - Excel file generation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📸 Screenshots

<!-- Add your screenshots here -->
### Dashboard
<img width="1345" height="598" alt="Dashboard" src="https://github.com/user-attachments/assets/7aa9e0fe-9746-4fa8-b63e-f325dd09947c" />


### Income Management
<img width="1349" height="597" alt="Income" src="https://github.com/user-attachments/assets/15cdaff0-5abd-49f3-b3b5-2b191d2b3126" />

### Expense Tracking
<img width="1349" height="600" alt="Expense" src="https://github.com/user-attachments/assets/7cc03df5-a7b7-43cc-9377-4caf4c13b132" />

4. Start the development server:
bash
npm run dev

## 💻 Usage

1. **Sign Up**: Create a new account with your name, email, and password
2. **Login**: Access your account with your credentials
3. **Add Income**: Navigate to the Income section and add your income sources
4. **Track Expenses**: Go to the Expense section and record your expenses
5. **View Dashboard**: Check your financial overview on the home page
6. **Export Data**: Download your financial data in Excel format
7. **Manage Profile**: Update your profile photo and information

## 📁 Project Structure

```
ExpenseFlow/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controller/
│   │   ├── authController.js     # Authentication logic
│   │   ├── dashboardController.js # Dashboard data
│   │   ├── expenseController.js  # Expense operations
│   │   └── incomeController.js   # Income operations
│   ├── middlewares/
│   │   ├── authMiddleware.js     # JWT verification
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Income.js             # Income schema
│   │   └── Expense.js            # Expense schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   ├── dashboardRoutes.js    # Dashboard endpoints
│   │   ├── expenseRoutes.js      # Expense endpoints
│   │   └── incomeRoutes.js       # Income endpoints
│   ├── uploads/                  # User uploaded files
│   ├── .env                      # Environment variables
│   ├── server.js                 # Server entry point
│   └── package.json
│
└── frontend/
    └── Expense-Flow/
        ├── src/
        │   ├── assets/           # Images and static files
        │   ├── components/       # Reusable components
        │   │   ├── Cards/
        │   │   ├── Charts/
        │   │   ├── Dashboard/
        │   │   ├── Expense/
        │   │   ├── Income/
        │   │   ├── inputs/
        │   │   └── layouts/
        │   ├── context/          # React context
        │   ├── hooks/            # Custom hooks
        │   ├── pages/            # Page components
        │   ├── utils/            # Utility functions
        │   ├── App.jsx           # Main app component
        │   └── main.jsx          # Entry point
        ├── .env                  # Environment variables
        ├── index.html
        ├── package.json
        └── vite.config.js
```

## 👨‍💻 Author

**Debasish**

## 🙏 Acknowledgments

- React Icons for the icon library
- Recharts for data visualization
- Tailwind CSS for the styling framework
- MongoDB team for the excellent database

---
<div align="center">
  
### ⭐ Star this repository if you found it helpful!

Made with ❤️ by Debasish

</div>
