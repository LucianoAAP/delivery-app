const { OK } = require('http-status-codes');
const { LoginUserService } = require('../../services');

const loginUser = async (req, res, _next) => {
  const { body } = req;

  const userToken = await LoginUserService(body);

  return res.status(OK).json(userToken);
};

module.exports = loginUser;