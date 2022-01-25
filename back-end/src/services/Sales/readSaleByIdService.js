const ApiError = require('../../Error/ApiError');

const { notFound } = ApiError;
const { Sale } = require('../../database/models');

module.exports = async (id) => {
  const result = await Sale.findByPk(id);

  if (!result) return notFound('not found');

  return result;
};
