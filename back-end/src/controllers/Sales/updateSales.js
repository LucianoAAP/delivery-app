const { OK } = require('http-status-codes');
const { updateSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  await updateSaleService(id, body);
  return res.status(OK).end();
};
