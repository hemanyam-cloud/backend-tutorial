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
- ## Project Structure

```text
backend-tutorial/
│
├── backend/
│   └── src/
│       ├── config/
│       │   └── db.js
│       │
│       ├── controllers/
│       │   └── userController.js
│       │
│       ├── middleware/
│       │   └── authMiddleware.js
│       │
│       ├── models/
│       │   └── User.js
│       │
│       ├── routes/
│       │   └── userRoutes.js
│       │
│       ├── app.js
│       └── index.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Features
1. User Registration
2. User Login
3. Password Hashing using bcrypt
4. JWT Token Generation
5. Authentication Middleware
6. Protected User Profile Route
7. MongoDB Database Integration



## Setup and Execution

### Prerequisites
Make sure the following are installed:
- Node.js
- npm
- MongoDB Atlas account
- Postman (for API testing)

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd backend-tutorial
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

Add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secret_key
```

### 5. Run the Backend Server

For development:

```bash
npm run dev
```

For normal execution:

```bash
npm start
```

### 6. Verify the Server

Open your browser and visit:

```text
http://localhost:4000
```

You should see:

```text
Backend server is running!
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Login user |
| GET | /api/users/profile | Fetch protected user profile |

## API Testing

The APIs were tested using Postman.

- Registration: POST request
- Login: POST request
- Profile: GET request with Bearer Token authentication




## Security
- Passwords are hashed using bcrypt.
- JWT is used for authentication.
- Protected routes require a valid authentication token.
- Environment variables are excluded from Git.

## Author
Backend Tutorial Project
