require('dotenv/config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { User } = require('../../database/models');
const { validateLogin } = require('../../validations');
const ApiError = require('../../Error/ApiError');

const { badRequest } = ApiError;

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const loginUserService = async (user) => {
  const error = validateLogin(user);
  
  if (error) return badRequest(error);
  
  const login = await User.findOne({ where: { email: user.email, password: md5(user.password) } });
  
  const { password, ...userWithoutPassword } = login.dataValues;

  if (!login) return badRequest('Invalid fields');

  const token = jwt.sign(login.dataValues, SECRET, jwtConfig);

  return {
    token,
    ...userWithoutPassword,
  };
};

module.exports = loginUserService;
