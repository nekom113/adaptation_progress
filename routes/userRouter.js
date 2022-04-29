const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router
    .route('/login')
    .get((req, res)=>{
        res.render('user/login')
    })





module.exports = router;
