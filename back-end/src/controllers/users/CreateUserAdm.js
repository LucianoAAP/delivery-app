const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { CreateUserAdmService } = require('../../services');

const createUserAdm = async (req, res, _next) => {
  const { body } = req;

  const newUser = await CreateUserAdmService(body);

  return res.status(CREATED).json(newUser);
};

module.exports = createUserAdm;