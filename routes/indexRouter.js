const router = require('express').Router();

<<<<<<< HEAD
router.get('/', (req, res) => {
  res.render('login');
});

router.get('/user/new_user', (req, res) => {
  res.render('addUser');
});

module.exports = router;
=======
router.get('/login', (req, res) => {
  res.render('login')
})
>>>>>>> 1d11fbc68dd92602ae7b1bb320f570c3e44f45b9
