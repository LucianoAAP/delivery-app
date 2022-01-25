const { Product } = require('../../database/models');
const { notFound } = require('../../Error/ApiError');

module.exports = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) return notFound('Product not found');
  return product;
};