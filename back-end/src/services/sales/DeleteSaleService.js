const { Sale } = require('../../database/models');
const ApiError = require('../../Error/ApiError');

const { notFound } = ApiError;

module.exports = async (id) => {
  const result = await Sale.destroy({ where: { id } });

  if (!result) return notFound('not found');

  return result;
};
