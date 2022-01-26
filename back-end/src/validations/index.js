const validateUser = require('./ValidateUser');
const validateProduct = require('./ValidateProduct');
const { schemaSales, schemaSalesUpdate } = require('./ValidateSale');

module.exports = {
  validateUser,
  validateProduct,
  schemaSales,
  schemaSalesUpdate,
};
