const md5 = require('md5');
const ApiError = require('../../Error/ApiError');
const { User } = require('../../database/models');

const { badRequest } = ApiError;
const { userValidate } = require('../../validations');

const UpdateUserService = async (id, user) => {
  const error = userValidate(user);

  if (error) return badRequest(error);

  const userExists = await User.findByPk(id);

  if (!userExists) return badRequest('User not found!');

  const { password, ...userWithoutPassword } = user;

  const updatedUser = await User.update(
    { ...userWithoutPassword, password: md5(password) }, { where: { id } },
  );

  return updatedUser;
};

module.exports = UpdateUserService;