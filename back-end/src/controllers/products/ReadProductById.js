const { OK } = require('http-status-codes');
const { readProductByIdService } = require('../../services');

module.exports = async (req, res) => {
  const product = await readProductByIdService(req.params.id);
  return res.status(OK).json(product);
};