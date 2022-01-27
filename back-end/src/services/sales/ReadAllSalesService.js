const { Sale, User, Product } = require('../../database/models');

module.exports = async () => {
  const sales = await Sale.findAll({
    include: [{ model: User, as: 'user' },
    { model: User, as: 'seller' },
    { model: Product, as: 'products', through: { attributes: ['quantity'], as: 'orderInfo' } }],
  });

  return sales;
};
