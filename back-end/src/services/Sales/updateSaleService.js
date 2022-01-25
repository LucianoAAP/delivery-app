const ApiError = require('../../Error/ApiError');
const { Sale } = require('../../database/models');

const { badRequest } = ApiError;
const { schemaSalesUpdate } = require('../../validations');

module.exports = async (id, body) => {
  const { status } = body;
  const error = schemaSalesUpdate(status);

  if (error) return badRequest(error);

  await Sale.update({ status }, { where: { id } });
};
