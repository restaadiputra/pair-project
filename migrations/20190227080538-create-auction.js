'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Auctions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CarId: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Cars',
          key: 'id'
        }
      },
      startTime: {
        type: Sequelize.DATE
      },
      finishTime: {
        type: Sequelize.DATE
      },
      startPrice: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('open', 'close')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Auctions');
  }
};