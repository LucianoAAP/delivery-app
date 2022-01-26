const { OK } = require('http-status-codes');
const { ReadAllProductsService, ReadProductsByTermService } = require('../../services');

module.exports = async (req, res) => {
  if (req.query.q) {
    const products = await ReadProductsByTermService(req.query.q);
    return res.status(OK).json(products);
  }
  const products = await ReadAllProductsService();
  return res.status(OK).json(products);
};