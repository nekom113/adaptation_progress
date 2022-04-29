const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

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
    const hash = bcrypt.hashSync(password, 7);
    const currUser = await User.create({
      name: nameUser,
      email: emailUser,
      password: hash,
      is_admin: false,
    });
    res.sendStatus(200)
  });

module.exports = router;
