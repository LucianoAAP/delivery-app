const { OK } = require('http-status-codes');
const { readSaleByIdService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  const result = await readSaleByIdService(id);
  return res.status(OK).json(result);
};
