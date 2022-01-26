const { NO_CONTENT } = require('http-status-codes');
const { DeleteSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  await DeleteSaleService(id);
  return res.status(NO_CONTENT).end();
};
