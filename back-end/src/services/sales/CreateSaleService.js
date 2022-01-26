const ApiError = require('../../Error/ApiError');
const { schemaSales } = require('../../validations');
const { Sale } = require('../../database/models');

const { badRequest } = ApiError;

module.exports = async (body) => {
  const error = schemaSales(body);

  if (error) return badRequest(error);

  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
  } = body;
  const result = await Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate: new Date(), status,
  });

  return result;
};
