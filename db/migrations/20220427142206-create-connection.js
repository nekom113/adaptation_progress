module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Connections', {
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
      checked_question: {
        type: Sequelize.BOOLEAN,
        references: {
          model: {
            tableName: 'Questions',
          },
          key: 'id',
        },
      },
      text_question: {
        type: Sequelize.STRING,
        references: {
          model: {
            tableName: 'Questions',
          },
          key: 'id',
        },
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('Connections');
  },
};
