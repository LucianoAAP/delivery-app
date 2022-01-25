const { Product } = require('../../database/models');
const { notFound } = require('../../Error/ApiError');

module.exports = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) return notFound('Product does not exist');
  await Product.destroy({ where: { id } });
  return product;
};