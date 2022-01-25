const { OK } = require('http-status-codes/build/cjs/legacy');
const { ReadUserByIdService } = require('../../services');

const ReadUserById = async (req, res, _next) => {
  const { id } = req.params;

  const user = await ReadUserByIdService(id);

  return res.status(OK).json(user);
};

module.exports = ReadUserById;