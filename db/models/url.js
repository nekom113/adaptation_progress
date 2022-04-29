const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Url extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.TemplateBoolean, {
        foreignKey: 'url_id',
      });
      this.hasMany(models.TemplateText, {
        foreignKey: 'url_id',
      });
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Url.init({
    url: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Url',
  });
  return Url;
};
