const { OK } = require('http-status-codes');
const { readSaleService } = require('../../services');

module.exports = async (_req, res) => {
  const result = await readSaleService();

  return res.status(OK).json(result);
};
