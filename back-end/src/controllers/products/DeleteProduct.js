const { NO_CONTENT } = require('http-status-codes');
const { DeleteProductService } = require('../../services');

module.exports = async (req, res) => {
  await DeleteProductService(req.params.id);
  return res.status(NO_CONTENT).end();
};