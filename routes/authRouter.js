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
  .route('/')
  .get((req, res) => res.render('login'))
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({
        where: {
          email,
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
      req.session.userId = serializeUser(user);
    } catch (err) {
      console.log(err);
      return failAuth(res);
    }
    res.redirect('/user/new_user');
    return res.end();
  });

router.get('/user/new', (req, res) => {
  res.render('addWorker');
});
module.exports = router;
