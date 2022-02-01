const ApiError = require('../../Error/ApiError');

const { badRequest } = ApiError;
const { User } = require('../../database/models');

const ReadUserByIdService = async (id) => {
  const userInfo = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!userInfo) return badRequest('User not found!');

  return userInfo;
};

module.exports = ReadUserByIdService;