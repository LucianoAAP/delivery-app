const { NO_CONTENT } = require('http-status-codes/build/cjs/legacy');
const { DeleteUserService } = require('../../services');

const deleteUser = async (req, res, _next) => {
  const { id } = req.params;

  await DeleteUserService(id);

  return res.status(NO_CONTENT).end();
};

module.exports = deleteUser;