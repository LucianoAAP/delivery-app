const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { CreateUserService } = require('../../services');

const createUser = async (req, res, _next) => {
  const { body } = req;

  const newUser = await CreateUserService(body);

  return res.status(CREATED).json(newUser);
};

module.exports = createUser;