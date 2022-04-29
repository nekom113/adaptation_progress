const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  User, Url, Question, TemplateBoolean, TemplateText,
} = require('../db/models/index');
const checkAuth = require('../middlewares/authCheck');

router.route('/form/:urlUnique/:userId')
  .post(async (req, res) => {
    const { urlUnique, userId } = req.params;
    try {
      const { workerName, mentorName } = req.body;
      const uniqueUrl = await Url.findOne({ where: { url: urlUnique } });
      const templateUserId = userId;
      const currentNames = await TemplateText.create({
        url_id: uniqueUrl.id,
        user_id: templateUserId,
        employee: workerName,
        mentor: mentorName,
      });
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

module.exports = router;
