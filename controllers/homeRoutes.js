
const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req,res) =>{
    res.render('homepage')

});


module.exports = router;