const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { CreateProductService } = require('../../services');

module.exports = async (req, res) => {
  const product = await CreateProductService(req.body);
  return res.status(CREATED).json(product);
};