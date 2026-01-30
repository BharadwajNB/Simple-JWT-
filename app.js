const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');


app.set("view engine", "ejs");

// Middleware MUST come BEFORE routes
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes come AFTER middleware
const router = require('./routes/login.route');
app.use('/', router);


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/jwt')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));


const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});