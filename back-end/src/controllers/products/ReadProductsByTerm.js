const { OK } = require('http-status-codes');
const { readAllProductsService, readProductsByTermService } = require('../../services');

module.exports = async (req, res) => {
  if (req.query.q) {
    const products = await readProductsByTermService(req.query.q);
    return res.status(OK).json(products);
  }
  const products = await readAllProductsService();
  return res.status(OK).json(products);
};