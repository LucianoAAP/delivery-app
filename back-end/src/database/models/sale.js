'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING(100),
      deliveryNumber: DataTypes.STRING(50),
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING(50),
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      sellerId: {type: DataTypes.INTEGER, foreignKey: true }
    },
    {
      tableName: 'Sales',
      timestamps: false,
      underscored: true
    }
  )

  Sale.associate = (models) => {
    Sale.belongsTo(models.user , { foreignKey: 'userId', as: 'customer' })

    Sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller' } )
  }
  return Sale;
};