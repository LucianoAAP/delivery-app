'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('SalesProducts', {
      saleId: {
        type: Sequelize.INTEGER,
        field: 'sale_id',
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Sales',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        field: 'product_id',
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Products',
          key: 'id'
        }
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('SalesProducts');
  }
};