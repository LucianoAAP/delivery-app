require('dotenv/config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { user } = require('../../database/models');
const { validateLogin } = require('../../validations');
const ApiError = require('../../Error/ApiError');

const { badRequest, notFound } = ApiError;

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const loginUserService = async (myUser) => {
  const error = validateLogin(myUser);
  
  if (error) {
    console.log(error);
    return badRequest(error);
  }
  
  const login = await user
    .findOne({ where: { email: myUser.email, password: md5(myUser.password) } });
  
  if (!login) return notFound('usuário não encontrado');
  const { password, ...userWithoutPassword } = login.dataValues;

  const token = jwt.sign(login.dataValues, SECRET, jwtConfig);

  return {
    token,
    ...userWithoutPassword,
  };
};

module.exports = loginUserService;
