const userValidate = require('./userValidate');
const validateProduct = require('./validateProduct');

const { schemaSales, schemaSalesUpdate } = require('./schemaSales');

module.exports = {
  userValidate,
  validateProduct,
  schemaSales,
  schemaSalesUpdate,
};
