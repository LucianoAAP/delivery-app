const { NO_CONTENT } = require('http-status-codes/build/cjs/legacy');
const { UpdateUserService } = require('../../services');

const updateUser = async (req, res, _next) => {
  const { id } = req.params;
  const { body } = req;

  await UpdateUserService(id, body);

  return res.status(NO_CONTENT).end();
};

module.exports = updateUser;