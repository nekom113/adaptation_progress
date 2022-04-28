const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TemplateText extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsTo(models.Url, {
        foreignKey: 'url_id',
      });
      this.belongsTo(models.Question, {
        foreignKey: 'question_id',
      });
    }
  }
  TemplateText.init({
    question_id: DataTypes.INTEGER,
    url_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    employee: DataTypes.STRING,
    mentor: DataTypes.STRING,
    text_answer: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'TemplateText',
  });
  return TemplateText;
};
