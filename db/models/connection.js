const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Connection.init({
    question_id: DataTypes.INTEGER,
    url_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    checked_question: DataTypes.BOOLEAN,
    text_question: DataTypes.STRING,
    recipient_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Connection',
  });
  return Connection;
};
