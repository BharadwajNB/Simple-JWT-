const express = require('express');
const router = express.Router();

// Your routes here
router.get('/',(req,res)=>{
    console.log('GET');
    res.send('Go To Login Page');
})

router.get('/login', (req, res) => {
    console.log('LOGIN GET METHOD IS WORKING')
    res.render('login');
});

// Make sure you EXPORT the router
module.exports = router;