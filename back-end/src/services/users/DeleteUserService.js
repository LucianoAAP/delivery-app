const { User } = require('../../database/models');
const ApiError = require('../../Error/ApiError');

const { badRequest } = ApiError;

const deleteUserService = async (id) => {
  const removedUser = await User.destroy({ where: { id } });

  if (!removedUser) return badRequest('User not found.'); 

  return removedUser;
};

module.exports = deleteUserService;