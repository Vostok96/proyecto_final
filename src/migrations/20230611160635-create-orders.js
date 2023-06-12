'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "user_id",
        references: {
          model:"users",
          key: 'id'
        }
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      total: {
        type: Sequelize.REAL,
        defaultValue: 0.0,
      },
      createAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updateAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orders');
  }
};