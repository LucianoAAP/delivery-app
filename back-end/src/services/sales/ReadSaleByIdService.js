const ApiError = require('../../Error/ApiError');

const { notFound } = ApiError;
const { Sale, User, Product } = require('../../database/models');

module.exports = async (id) => {
  const result = await Sale.findOne({
    where: { id },
    include: [{ model: User, as: 'customer' },
    { model: User, as: 'seller' },
    { model: Product, as: 'products', through: { attributes: ['quantity'], as: 'orderInfo' } }],
  });

  if (!result) return notFound('not found');

  return result;
};
