const { OK } = require('http-status-codes');
const { UpdateSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  await UpdateSaleService(id, body);
  return res.status(OK).end();
};
