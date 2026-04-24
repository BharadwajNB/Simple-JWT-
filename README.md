<div align="center">

# 🔐 Simple JWT Authentication API

A RESTful authentication system built with **Node.js** and **Express.js** that implements secure JWT-based authentication with HTTP-only cookie storage and protected route middleware.

[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**Base URL:** `http://localhost:3000`

[Getting Started](#-getting-started) · [API Reference](#-api-reference) · [Authentication Flow](#-authentication-flow) · [Security](#-security)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)
- [Authentication Flow](#-authentication-flow)
- [Security](#-security)
- [Testing](#-testing)
- [Deployment](#️-deployment)
- [Author](#-author)

---

## ✨ Features

- 🔑 **User Authentication** — Register and login with JWT token generation
- 🍪 **Secure Cookies** — Tokens stored in HTTP-only cookies, inaccessible to JavaScript
- 🛡️ **Protected Routes** — Middleware-based access control for private endpoints
- 🧩 **Modular Architecture** — Clean separation of routes, models, and views
- ⚡ **Lightweight & Scalable** — Minimal setup with a structure designed for easy extension

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Runtime   | Node.js (v14+)          |
| Framework | Express.js              |
| Auth      | JSON Web Token (JWT)    |
| Storage   | HTTP-only Cookies       |

---

## 📁 Project Structure

```
simple-jwt/
├── models/          # Database connection and schemas
├── routes/          # Authentication and route logic
├── views/           # Response handling / UI templates
├── app.js           # Main server entry point
├── package.json     # Project metadata and dependencies
└── .gitignore       # Files excluded from version control
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) **v14 or higher**
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/simple-jwt.git
cd simple-jwt
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
JWT_SECRET=your_super_secret_key_here
PORT=3000
```

> ⚠️ **Important:** Never commit your `.env` file. Make sure it's listed in `.gitignore`.

### 4. Start the Server

```bash
node app.js
```

The server will start at:

```
http://localhost:3000
```

---

## 📡 API Reference

### `POST /register`

Registers a new user account.

**Request Body:**

```json
{
  "username": "user1",
  "password": "123456"
}
```

**Success Response:** `201 Created`

```json
{
  "message": "User registered successfully"
}
```

---

### `POST /login`

Authenticates a user and sets a JWT token in an HTTP-only cookie.

**Request Body:**

```json
{
  "username": "user1",
  "password": "123456"
}
```

**Success Response:** `200 OK`

```json
{
  "message": "Login successful"
}
```

> 🍪 The JWT token is automatically stored in an HTTP-only cookie upon successful login.

---

### `GET /protected`

Access a protected resource. Requires a valid JWT cookie.

**Headers:** *(Cookie is sent automatically by the browser)*

**Success Response:** `200 OK`

```json
{
  "message": "Welcome to the protected route!",
  "user": { "username": "user1" }
}
```

**Unauthorized Response:** `401 Unauthorized`

```json
{
  "message": "Access denied. No token provided."
}
```

---

### `GET /logout`

Clears the authentication cookie and ends the session.

**Success Response:** `200 OK`

```json
{
  "message": "Logged out successfully"
}
```

---

## 🔄 Authentication Flow

```
┌─────────┐         ┌─────────────┐         ┌─────────────┐
│  Client │         │   Express   │         │  JWT/Cookie │
└────┬────┘         └──────┬──────┘         └──────┬──────┘
     │   POST /login       │                        │
     │ ──────────────────► │                        │
     │                     │  Validate credentials  │
     │                     │ ──────────────────────►│
     │                     │  Generate JWT token    │
     │                     │ ◄──────────────────────│
     │  Set-Cookie (JWT)   │                        │
     │ ◄────────────────── │                        │
     │                     │                        │
     │   GET /protected    │                        │
     │ ──────────────────► │                        │
     │                     │  Verify JWT cookie     │
     │                     │ ──────────────────────►│
     │                     │  Token valid ✓         │
     │                     │ ◄──────────────────────│
     │   Protected data    │                        │
     │ ◄────────────────── │                        │
└────┴────┘         └──────┴──────┘         └──────┴──────┘
```

1. User registers or logs in via `POST /login`
2. Server validates credentials and generates a signed JWT
3. JWT is stored in an **HTTP-only cookie** (not accessible via JavaScript)
4. On each request to a protected route, middleware extracts and verifies the cookie
5. Access is granted if the token is valid; otherwise `401 Unauthorized` is returned
6. Logging out clears the cookie, invalidating the session

---

## 🔒 Security

| Measure | Description |
|---------|-------------|
| **JWT Stateless Auth** | No server-side sessions; tokens are self-contained |
| **HTTP-only Cookies** | Tokens are inaccessible to JavaScript, preventing XSS attacks |
| **Environment Variables** | Secret keys kept out of source code via `.env` |
| **Middleware Protection** | Route-level auth checks using reusable middleware |

---

## 🧪 Testing

This API was tested using [Postman](https://www.postman.com/). Below are the recommended test flows:

| Flow | Endpoints |
|------|-----------|
| Happy path | `POST /register` → `POST /login` → `GET /protected` → `GET /logout` |
| Unauthorized access | `GET /protected` (without logging in) → expect `401` |
| Re-access after logout | `GET /logout` → `GET /protected` → expect `401` |

> 📎 *(Add your Postman collection link here if available)*

---

## ☁️ Deployment

This app can be deployed to any Node.js-compatible platform:

| Platform | Notes |
|----------|-------|
| [Render](https://render.com/) | Free tier available; auto-deploys from GitHub |
| [Railway](https://railway.app/) | Simple setup with environment variable support |
| [Vercel](https://vercel.com/) | Supported via serverless functions |

### Pre-deployment Checklist

- [ ] Set `JWT_SECRET` in your platform's environment variable settings
- [ ] Ensure `PORT` is configured (or use the platform-provided `process.env.PORT`)
- [ ] Enable **HTTPS** — required for `Secure` flag on cookies in production
- [ ] Update cookie options for production:

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",  // HTTPS only in prod
  sameSite: "strict"
});
```

---

## 👨‍💻 Author

**Bharadwaj** — Backend Developer | Building scalable systems

---

## ⭐ Acknowledgements

- [Express.js](https://expressjs.com/) — Fast, minimalist web framework for Node.js
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) — JWT implementation for Node.js
- [cookie-parser](https://github.com/expressjs/cookie-parser) — Middleware to parse cookies

---

<div align="center">

Made with ❤️ by Bharadwaj · [MIT License](LICENSE)

</div>
