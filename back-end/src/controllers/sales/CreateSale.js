const { CREATED } = require('http-status-codes');
const { CreateSaleService } = require('../../services');

module.exports = async (req, res) => {
  const { body } = req;
  const { id } = req.userInfo;

  const result = await CreateSaleService({ userId: id, ...body });
  return res.status(CREATED).json(result);
};
