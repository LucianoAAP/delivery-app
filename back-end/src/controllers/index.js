const readAllProducts = require('./products/ReadAllProducts');
const readProductById = require('./products/ReadProductById');
const createProduct = require('./products/CreateProduct');
const updateProduct = require('./products/UpdateProduct');
const deleteProduct = require('./products/DeleteProduct');

module.exports = {
  readAllProducts,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};