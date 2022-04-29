const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  User, Url, Question, TemplateBoolean, TemplateText,
} = require('../db/models/index');
const checkAuth = require('../middlewares/authCheck');

router.route('/allforms/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    const url = await Url.findOne({where: {user_id = userId}})
    try {
      const templateText = await TemplateText.findAll({ where: { user_id: userId, url_id: url } });
      const templateBoolean = await TemplateBoolean.findAll({ where: { url_id: urlId, user_id: url } });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;
