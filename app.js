const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/login.route');
const userModel = require("./models/users");

app.set("view engine", "ejs");

// Middleware MUST come BEFORE routes
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes come AFTER middleware
app.use('/', router);


mongoose.connect('mongodb://127.0.0.1:27017/jwt')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});