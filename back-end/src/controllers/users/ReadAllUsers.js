const { OK } = require('http-status-codes/build/cjs/legacy');
const { ReadAllUsersService } = require('../../services');

const readAllUsers = async (req, res, _next) => {
  const users = await ReadAllUsersService();

  return res.status(OK).json(users);
};

module.exports = readAllUsers;