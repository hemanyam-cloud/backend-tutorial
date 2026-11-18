# Backend Tutorial Project

## About the Project
This project is a backend application developed using Node.js, Express.js and MongoDB.

It provides user registration, login and authentication functionality.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- bcrypt
- JSON Web Token (JWT)
- Postman

## Features
1. User Registration
2. User Login
3. Password Hashing using bcrypt
4. JWT Token Generation
5. Authentication Middleware
6. Protected User Profile Route
7. MongoDB Database Integration

## Project Structure

backend-tutorial/
- backend/
  - src/
    - config/
    - controllers/
    - middleware/
    - models/
    - routes/
    - app.js
    - index.js
- package.json
- package-lock.json
- .gitignore
- .env.example

## Installation and Setup

### 1. Clone the repository
git clone YOUR_GITHUB_REPOSITORY_URL

### 2. Open the project folder
cd backend-tutorial

### 3. Install dependencies
npm install

### 4. Configure environment variables

Create a `.env` file in the root folder using `.env.example` as a guide.

Add your own MongoDB connection string, port and JWT secret.

### 5. Start the server

For development:
npm run dev

For normal execution:
npm start

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Login user |
| GET | /api/users/profile | Get protected user profile |

## Testing
APIs were tested using Postman.

## Security
- Passwords are hashed using bcrypt.
- JWT is used for authentication.
- Protected routes require a valid authentication token.
- Environment variables are excluded from Git.

## Author
Backend Tutorial Project