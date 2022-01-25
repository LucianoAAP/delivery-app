const { OK } = require('http-status-codes');
const { deleteProductService } = require('../../services');

module.exports = async (req, res) => {
  const product = await deleteProductService(req.params.id);
  return res.status(OK).json(product);
};