const { Product } = require('../../database/models');
const { badRequest, notFound } = require('../../Error/ApiError');
const validateProduct = require('../../validations');

module.exports = async (id, body) => {
  const error = validateProduct(body);
  if (error) return badRequest(error);

  const product = await Product.findByPk(id);
  if (!product) return notFound('Product does not exist');

  await Product.update(
    { ...body },
    { where: { id } },
  );

  return Product.findByPk(id);
};