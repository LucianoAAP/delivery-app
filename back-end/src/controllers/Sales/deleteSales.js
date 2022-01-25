const { NO_CONTENT } = require('http-status-codes');
const { deleteSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  await deleteSaleService(id);
  return res.status(NO_CONTENT).end();
};
