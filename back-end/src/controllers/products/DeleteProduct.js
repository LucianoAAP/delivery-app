const { NO_CONTENT } = require('http-status-codes');
const { deleteProductService } = require('../../services');

module.exports = async (req, res) => {
  await deleteProductService(req.params.id);
  return res.status(NO_CONTENT).end();
};