module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TemplateTexts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      question_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Questions',
          },
          key: 'id',
        },
      },
      url_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Urls',
          },
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      employee: {
        type: Sequelize.STRING,
      },
      mentor: {
        type: Sequelize.STRING,
      },
      text_answer: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TemplateTexts');
  },
};
