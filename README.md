🔐 Simple JWT Authentication API

A RESTful authentication system built with Node.js and Express.js that implements secure JWT-based authentication with cookie storage and protected routes.

Node.js • Express.js • JWT • Cookies • License: MIT

🔗 Live Demo

(Add your deployed link here if available)
Base URL: http://localhost:PORT

📋 Table of Contents
Features
Tech Stack
Project Structure
Getting Started
API Reference
Authentication Flow
Security
Testing
Deployment
Author
✨ Features
User Authentication — Login/Register with JWT token generation
Secure Cookies — Token stored using HTTP-only cookies
Protected Routes — Access control using middleware
Modular Architecture — Clean separation of routes, models, and views
Lightweight & Scalable — Minimal setup, easy to extend
🛠️ Tech Stack
Layer	Technology
Runtime	Node.js
Framework	Express.js
Auth	JSON Web Token (JWT)
Storage	Cookies
📁 Project Structure
Simple-JWT/
├── models/        # Database connection / schemas
├── routes/        # Authentication & route logic
├── views/         # Response handling / UI (if any)
├── app.js         # Main server file
├── package.json
└── .gitignore
🚀 Getting Started
Prerequisites
Node.js (v14+)
npm
1. Clone the Repository
git clone https://github.com/your-username/simple-jwt.git
cd simple-jwt
2. Install Dependencies
npm install
3. Configure Environment Variables

Create a .env file:

JWT_SECRET=your_secret_key
PORT=3000
4. Start the Server
node app.js

Server runs at:

http://localhost:3000
📡 API Reference
POST /register

Registers a new user

Request Body

{
  "username": "user1",
  "password": "123456"
}
POST /login

Authenticates user and returns JWT in cookies

Request Body

{
  "username": "user1",
  "password": "123456"
}
GET /protected

Access protected route (requires valid JWT)

GET /logout

Clears authentication token

🔄 Authentication Flow
User registers or logs in
Server generates a JWT token
Token is stored in HTTP-only cookies
Middleware verifies token on protected routes
Access is granted or denied accordingly
🔒 Security
JWT-based stateless authentication
HTTP-only cookies to prevent XSS attacks
Secret keys stored in environment variables
Middleware-based route protection
🧪 Testing
Tested using Postman
Supports all major authentication flows

(Add your Postman collection link if available)

☁️ Deployment
Can be deployed on:
Render
Vercel (Backend)
Railway
Ensure:
Environment variables are configured
HTTPS is enabled for cookies
👨‍💻 Author

Bharadwaj
Backend Developer | Building scalable systems

⭐ Acknowledgements
Express.js for backend framework
JWT for authentication mechanism
