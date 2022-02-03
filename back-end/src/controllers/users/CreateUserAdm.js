const { CREATED } = require('http-status-codes/build/cjs/legacy');
const { CreateUserAdmService } = require('../../services');

const createUserAdm = async (req, res, _next) => {
  const { body } = req;

  const { id, name, email, role } = await CreateUserAdmService(body);

  return res.status(CREATED).json({ id, name, email, role });
};

module.exports = createUserAdm;