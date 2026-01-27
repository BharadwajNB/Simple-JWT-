const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const port = 5000;
app.listen(port,()=>{
    console.log(`Server is running on https://localhost:${port}`);
});