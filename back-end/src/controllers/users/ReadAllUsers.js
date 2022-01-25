const { OK } = require('http-status-codes/build/cjs/legacy');
const { ReadAllusersService } = require('../../services');

const readAllUsers = async (req, res, _next) => {
  const users = await ReadAllusersService();

  return res.status(OK).json(users);
};

module.exports = readAllUsers;