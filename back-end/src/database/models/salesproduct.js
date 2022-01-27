'use strict';
module.exports = (sequelize, DataTypes) => {

  const SalesProduct = sequelize.define(
    'SalesProduct',
    {
      quantity: DataTypes.INTEGER
    },
    {
      tableName: 'SalesProducts',
      timestamps: false
    }
  );

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      uniqueKey: 'quantity'
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  // SalesProduct.associate = (models) => {
  //   models.Sale.belongsToMany(models.Product,
  //     {
  //       as: 'products',
  //       through: SalesProduct,
  //       foreignKey: 'saleId',
  //       otherKey: 'productId'
  //     });

  //   models.Product.belongsToMany(models.Sale,
  //     {
  //       as: 'sales',
  //       through: SalesProduct,
  //       foreignKey: 'productId',
  //       otherKey: 'saleId'
  //     });
  // }
 
  return SalesProduct;
};