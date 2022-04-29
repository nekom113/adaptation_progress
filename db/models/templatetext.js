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
    }
  }
  TemplateText.init({
    url_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    employee: DataTypes.STRING,
    mentor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'TemplateText',
  });
  return TemplateText;
};
