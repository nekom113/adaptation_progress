const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  User, Url, Question, TemplateBoolean, TemplateText,
} = require('../db/models/index');
const checkAuth = require('../middlewares/authCheck');

router.route('/allforms/:userId')
  .get(async (req, res) => {
    const { userId, urlId } = req.params;
    try {
      const templateText = await TemplateText.findAll({ where: { user_id: userId, url_id: urlId } });
      const templateBoolean = await TemplateBoolean.findAll({ where: { url_id: urlId, user_id: userId } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;