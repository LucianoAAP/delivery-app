const readAllProducts = require('./ReadAllProducts');
const readProductById = require('./ReadProductById');
const createProduct = require('./CreateProduct');
const updateProduct = require('./UpdateProduct');
const deleteProduct = require('./DeleteProduct');

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};