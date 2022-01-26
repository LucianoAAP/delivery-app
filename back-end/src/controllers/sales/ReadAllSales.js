const { OK } = require('http-status-codes');
const { ReadAllSalesService } = require('../../services');

module.exports = async (_req, res) => {
  const result = await ReadAllSalesService();

  return res.status(OK).json(result);
};
