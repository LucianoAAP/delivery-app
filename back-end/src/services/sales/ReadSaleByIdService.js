const ApiError = require('../../Error/ApiError');

const { notFound } = ApiError;
const { Sale, user, Product } = require('../../database/models');

module.exports = async (id) => {
  const result = await Sale.findOne({
    where: { id },
    include: [{ model: user, as: 'customer' },
    { model: user, as: 'seller' },
    { model: Product, as: 'products', through: { attributes: ['quantity'], as: 'orderInfo' } }],
  });

  if (!result) return notFound('not found');

  return result;
};
