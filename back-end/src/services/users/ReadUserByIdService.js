const ApiError = require('../../Error/ApiError');

const { badRequest } = ApiError;
const { User } = require('../../database/models');

const ReadUserByIdService = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return badRequest('User not found!');

  return user;
};

module.exports = ReadUserByIdService;