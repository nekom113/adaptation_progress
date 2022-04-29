const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  User, Url, Question, TemplateBoolean, TemplateText,
} = require('../db/models/index');
const checkAuth = require('../middlewares/authCheck');

router.route('/form')
  .post(async (req, res) => {
    const uuid = uuidv4();
    const url = await Url.create({
      url: uuid,
    });
    const questions = await Question.findAll({ raw: true });
    for (let i = 0; i < questions.length; i++) {
      await TemplateBoolean.create({
        question_id: i.id,
        url_id: url.id,
        user_id: req.session.userId,
        checkbox: false,
      });
    }
  });

module.exports = router;
