const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.TemplateBoolean, {
        foreignKey: 'user_id',
      });
      this.hasMany(models.TemplateText, {
        foreignKey: 'user_id',
      });
    }
  }
  Question.init({
    title: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
