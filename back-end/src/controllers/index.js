const readAllProducts = require('./products/ReadAllProducts');
const readProductsByTerm = require('./products/ReadProductsByTerm');
const readProductById = require('./products/ReadProductById');
const createProduct = require('./products/CreateProduct');
const updateProduct = require('./products/UpdateProduct');
const deleteProduct = require('./products/DeleteProduct');

module.exports = {
  readAllProducts,
  readProductsByTerm,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};