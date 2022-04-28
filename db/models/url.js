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
    }
  }
  Url.init({
    url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Url',
  });
  return Url;
};
