const router = require('express').Router();
const bcript = require('bcrypt');
const { User } = require('../db/models/index');

function failAuth(res) {
  return res.status(401).end();
}

function serializeUser(user) {
  return {
    id: user.id,
    username: user.username,
  };
}

router
  .route('/signin')
  .get((req, res) => res.render('signin'))
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          username,
        },
        raw: true,
      });
      if (!user) {
        return failAuth(res);
      }
      const isValidPassword = await bcript.compare(password, user.password);
      if (!isValidPassword) {
        return failAuth(res);
      }
      req.session.user = serializeUser(user);
    } catch (err) {
      logger.error(err);
      return failAuth(res);
    }
    return res.end();
  });

module.exports = router;
