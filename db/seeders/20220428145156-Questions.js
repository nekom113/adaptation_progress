module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Questions', [
      {
        title: 'Наставник выдал мне пропуск',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Наставник сообщил пароль от Wi-Fi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Системный администратор выдал мне ноутбук',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Системный администратор выдал мне доступы к почте',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ты познакомился (-ась) со своим руководителем',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ты написал(-а) сообщение в командный чат',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Напиши имена трех твоих коллег по отделу:',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ты отправил (-а)  сканды документы на оформление в отдел кадров',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Ты подписал (-а) соглашение о коммерческой тайне',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Получи свою первую задачу у руководителя',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Создай подпись в почте по корпоративному шаблону',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
