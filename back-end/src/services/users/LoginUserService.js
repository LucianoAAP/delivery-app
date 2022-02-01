require('dotenv/config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const fs = require('fs');
const { User } = require('../../database/models');
const { validateLogin } = require('../../validations');
const ApiError = require('../../Error/ApiError');

const { badRequest, notFound } = ApiError;

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const loginUserService = async (myUser) => {
  const SECRET = fs.readFileSync('jwt.evaluation.key').toString();
  const error = validateLogin(myUser);
  
  if (error) {
    console.log(error);
    return badRequest(error);
  }
  
  const login = await User
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
