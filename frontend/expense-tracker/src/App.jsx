import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Authentication Pages
import Login from "../src/pages/auth/Login";
import SignUp from "../src/pages/auth/SignUp";

// Dashboard Pages
import Home from "../src/pages/Dashboard/Home";
import Income from "../src/pages/Dashboard/Income";
import Expense from "../src/pages/Dashboard/Expense";

// Context and Utilities
import UserProvider from './context/userContext';
import {Toaster} from "react-hot-toast"

/**
 * Main Application Component
 * Handles routing and global state management for ExpenseFlow
 */
const App = () => {
  return (
    <UserProvider>
      <div className='text-xl font-medium text-black'>
        <Router>
          <Routes>
            {/* Root route with authentication check */}
            <Route path="/" element={<Root />} />
            
            {/* Authentication routes */}
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            
            {/* Protected dashboard routes */}
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
          </Routes>
        </Router>
      </div>

      {/* Global toast notifications for user feedback */}
      <Toaster
        toastOption={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </UserProvider>
  )
}

/**
 * Root Component - Handles initial route based on authentication status
 * Redirects authenticated users to dashboard, others to login
 */
const Root = () => {
  // Check authentication status from localStorage
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
}

export default App


// Router (or BrowserRouter)
// Wraps your entire app.
// Enables client-side routing (changing pages without refreshing).
// Tracks the URL in the address bar and shows the correct page/component.

// Routes
// A container for all your Routes.
// Think of it as a switchboard: it reads the current URL and matches it to a Route.

// Route
// Defines a URL path and which component should render when that path is visited.