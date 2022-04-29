const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/user/new_user', (req, res) => {
  res.render('addUser');
});
router.get('/user/new', (req, res) => {
  res.render('addWorker');
});

module.exports = router;
