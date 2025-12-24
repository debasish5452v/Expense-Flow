# Contributing to ExpenseFlow

Thank you for considering contributing to ExpenseFlow! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

Please be respectful and constructive in all interactions. We aim to maintain a welcoming and inclusive environment.

## How to Contribute

### Reporting Bugs
If you find a bug, please create an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version)

### Suggesting Features
Feature requests are welcome! Please include:
- Clear description of the feature
- Use case and benefits
- Possible implementation approach

### Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: new feature description"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## Development Setup

### Prerequisites
- Node.js v18+
- MongoDB
- Git

### Setup Steps
```bash
# Clone the repository
git clone <repo-url>
cd ExpenseFlow

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend/expense-tracker
npm install

# Set up environment variables
cp backend/.env.example backend/.env
# Edit .env with your configuration
```

## Coding Standards

### JavaScript/React
- Use functional components with hooks
- Follow ESLint configuration
- Use meaningful variable names
- Add comments for complex logic
- Keep components small and focused

### CSS/Tailwind
- Use Tailwind utility classes
- Maintain consistent spacing
- Follow mobile-first approach
- Use custom classes sparingly

### API Development
- RESTful conventions
- Proper error handling
- Input validation
- Clear response messages
- Consistent status codes

## Commit Message Guidelines

Format: `Type: Description`

**Types:**
- `Add:` New feature or file
- `Update:` Changes to existing functionality
- `Fix:` Bug fixes
- `Refactor:` Code restructuring
- `Docs:` Documentation changes
- `Style:` Formatting changes
- `Test:` Adding tests

**Examples:**
- `Add: income export to PDF feature`
- `Fix: chart rendering on mobile devices`
- `Update: authentication token expiry time`

## Testing

Before submitting:
- Test all functionality manually
- Ensure no console errors
- Check responsive design
- Verify API endpoints
- Test edge cases

## Questions?

Feel free to open an issue for any questions or clarifications needed.

---

Thank you for contributing to ExpenseFlow! 🚀
