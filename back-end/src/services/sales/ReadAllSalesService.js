const { Sale, user, Product } = require('../../database/models');

module.exports = async () => {
  const sales = await Sale.findAll({
    include: [{ model: user, as: 'customer' },
    { model: user, as: 'seller' },
    { model: Product, as: 'products', through: { attributes: ['quantity'], as: 'orderInfo' } }],
  });

  return sales;
};
