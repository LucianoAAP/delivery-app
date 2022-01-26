const { OK } = require('http-status-codes');
const { CreateSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { body } = req;

  const result = await CreateSaleService(body);
  return res.status(OK).json(result);
};
