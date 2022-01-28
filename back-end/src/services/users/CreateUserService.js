const md5 = require('md5');
const { user } = require('../../database/models');
const { validateUser } = require('../../validations');
const ApiError = require('../../Error/ApiError');

const { badRequest, conflict } = ApiError;

const createUserService = async (newUser) => {
  const error = validateUser(newUser);

  if (error) return badRequest(error);

  const emailExists = await user.findOne({ where: { email: newUser.email } });

  if (emailExists) return conflict('Email already registered');

  const { password, ...userWhithoutPassword } = newUser;

  const createdUser = await user.create({ ...userWhithoutPassword, password: md5(password) });

  return createdUser;
};

module.exports = createUserService;