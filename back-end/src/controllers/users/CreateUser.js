const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { CreateUserService } = require('../../services');

const createUser = async (req, res, _next) => {
  const { body } = req;

  const { name, email, role } = await CreateUserService(body);

  return res.status(CREATED).json({ name, email, role });
};

module.exports = createUser;