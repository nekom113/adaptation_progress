const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const saltRounds = 1;

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    res.render('addUser');
  })
  .post(async (req, res) => {
    const {
      nameUser, password, emailUser,
    } = req.body;
    const hash = await bcrypt.hash(password, saltRounds);
    const currUser = await User.create({
      name: nameUser,
      email: emailUser,
      is_admin: false,
      password: hash,
    });
    req.session.userId = currUser.id;
    res.redirect('/');
  });

module.exports = router;
