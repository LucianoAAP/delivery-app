const validateUser = require('./ValidateUser');
const validateProduct = require('./ValidateProduct');
const validateLogin = require('./ValidateLogin');
const { schemaSales, schemaSalesUpdate } = require('./ValidateSale');

module.exports = {
  validateUser,
  validateProduct,
  schemaSales,
  schemaSalesUpdate,
  validateLogin,
};
