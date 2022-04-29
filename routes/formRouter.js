const router = require('express').Router();
const {
  User, Url, Question, TemplateBoolean, TemplateText,
} = require('../db/models/index');
const checkAuth = require('../middlewares/authCheck');

router.route('/form/:urlUnique/:questionId/')
  .post(async (req, res) => {
    const { urlUnique, questionId } = req.params;

    try {
      const unique_url = await Url.findOne({ where: { url: urlUnique } });
      console.log(unique_url);
      const boolean = await TemplateBoolean.findOne({ where: { question_id: questionId, url_id: unique_url.id } });
      boolean.update({ checkbox: !boolean.checkbox });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;
