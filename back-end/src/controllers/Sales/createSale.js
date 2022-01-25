const { OK } = require('http-status-codes');
const { createSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { body } = req;

  const result = await createSaleService(body);
  return res.status(OK).json(result);
};
