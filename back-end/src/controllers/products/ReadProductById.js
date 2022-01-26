const { OK } = require('http-status-codes');
const { ReadProductByIdService } = require('../../services');

module.exports = async (req, res) => {
  const product = await ReadProductByIdService(req.params.id);
  return res.status(OK).json(product);
};