
const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req,res) =>{
    res.render('homepage')

});


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

module.exports = router;