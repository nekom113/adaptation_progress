const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
      this.hasMany(models.Url, {
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    password: DataTypes.TEXT,
    is_admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
