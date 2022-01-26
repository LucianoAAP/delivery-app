const { NO_CONTENT } = require('http-status-codes');
const { UpdateProductService } = require('../../services');

module.exports = async (req, res) => {
  await UpdateProductService(req.params.id, req.body);
  return res.status(NO_CONTENT).end();
};