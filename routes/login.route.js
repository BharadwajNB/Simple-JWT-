const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const userModel = require('../models/users');

// Your routes here
router.get('/',(req,res)=>{
    console.log('GET');
    res.render('home');
})


router.post('/create', (req, res) => {
    console.log('POST METHOD WORKING');

       let {username, email, password, age} = req.body;

        bcrypt.genSalt(10,(err,salt) => {
           bcrypt.hash(password , salt , async (err,hash) => {
                let createdUser = await userModel.create({
                    username,
                    email,
                    password: hash,
                    age
                })


               let token = jwt.sign({email}, "shhhhhh");
               res.cookie("token",token);
                res.send(createdUser);
           })
        })
});


router.get('/login',(req,res)=>{
    console.log('LOGIN GET');
    res.render('login');
})



// Make sure you EXPORT the router
module.exports = router;