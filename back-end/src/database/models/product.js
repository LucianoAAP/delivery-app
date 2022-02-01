'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(4, 2),
      urlImage: DataTypes.STRING(200)
    },
    {
      tableName: 'products',
      timestamps: false,
      underscored: true
    }
  )
  return Product;
};