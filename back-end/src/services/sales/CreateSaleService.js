const Sequelize = require('sequelize');
const config = require('../../database/config/config');
const ApiError = require('../../Error/ApiError');
const { schemaSales } = require('../../validations');
const { Sale, SalesProduct } = require('../../database/models');

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development,
);

const { badRequest } = ApiError;

const createSale = async (body) => {
  const {
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
  } = body;

  return Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate: new Date(), status,
  });
};

module.exports = async (body) => {
  const error = schemaSales(body);
  if (error) return badRequest(error);
  const { products } = body;

  const t = await sequelize.transaction();

  try {
    const result = await createSale(body);
    const salesProduct = products.map(async ({ id, quantity }) => (SalesProduct
      .create({ saleId: result.id, productId: id, quantity })));

    Promise.all(salesProduct, { transaction: t });
    await t.commit();

    return result;
  } catch (e) {
    await t.rollback();
    return badRequest(e);
  }
};
