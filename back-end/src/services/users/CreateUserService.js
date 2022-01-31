const md5 = require('md5');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { user } = require('../../database/models');
const { validateUser } = require('../../validations');
const ApiError = require('../../Error/ApiError');

const { badRequest, conflict } = ApiError;

const jwtConfig = {
  expiresIn: '12h',
  algorithm: 'HS256',
};

const createUserService = async (newUser) => {
  const SECRET = fs.readFileSync('jwt.evaluation.key').toString();

  const error = validateUser(newUser);

  if (error) return badRequest(error);

  const emailExists = await user.findOne({
    where: {
      [Op.or]: [{ name: newUser.name }, { email: newUser.email }],
    },
  });

  if (emailExists) return conflict('Email already registered');

  const { password, ...userWithoutPassword } = newUser;
  
  const { dataValues } = await user
    .create({ ...userWithoutPassword, password: md5(password) });
  
  const token = jwt.sign(newUser, SECRET, jwtConfig);

  return {
    token,
    ...dataValues,
  };
};

module.exports = createUserService;