const { OK } = require('http-status-codes');
const { readAllProductsService } = require('../../services');

module.exports = async (_req, res) => {
  const products = await readAllProductsService();
  return res.status(OK).json(products);
};