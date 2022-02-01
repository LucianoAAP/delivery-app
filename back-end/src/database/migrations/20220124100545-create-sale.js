'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      sellerId: {
        type: Sequelize.INTEGER,
        field: 'seller_id',
        foreignKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      totalPrice: {
        field: 'total_price',
        type: Sequelize.DECIMAL(9, 2)
      },
      deliveryAddress: {
        field: 'delivery_address',
        type: Sequelize.STRING(100),
      },
      deliveryNumber: {
        field: 'delivery_number',
        type: Sequelize.STRING(50),
      },
      saleDate: {
        field: 'sale_date',
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(50)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};