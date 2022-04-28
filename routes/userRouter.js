const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router
  .route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const {
      nameUser, sernameUser, password, emailUser,
    } = req.body;
    const hash = bcript.hashSync(password, 7);
    const currUser = await User.create({
      name: nameUser,
      sernameUser: sername,
      password: hash,
      emailUser: email,
    });
    res.redirect('/')
  });

module.exports = router;
