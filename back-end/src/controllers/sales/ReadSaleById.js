const { OK } = require('http-status-codes');
const { ReadSaleByIdService } = require('../../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  const result = await ReadSaleByIdService(id);
  return res.status(OK).json(result);
};
