const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { createProductService } = require('../../services');

module.exports = async (req, res) => {
  const product = await createProductService(req.body);
  return res.status(CREATED).json(product);
};