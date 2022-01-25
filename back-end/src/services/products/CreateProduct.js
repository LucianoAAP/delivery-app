const { Product } = require('../../database/models');
const { badRequest, conflict } = require('../../Error/ApiError');
const validateProduct = require('../../validations');

module.exports = async (body) => {
  const error = validateProduct(body);
  if (error) return badRequest(error);
  const product = await Product.findOne({ where: { name: body.name } });
  if (product) return conflict('Product already exists');
  const newProduct = await Product.create({ ...body });
  return newProduct;
};