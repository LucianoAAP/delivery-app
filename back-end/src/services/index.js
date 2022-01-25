const readAllProductsService = require('./products/ReadAllProducts');
const readProductByIdService = require('./products/ReadProductById');
const createProductService = require('./products/CreateProduct');
const updateProductService = require('./products/UpdateProduct');
const deleteProductService = require('./products/DeleteProduct');

module.exports = {
  readAllProductsService,
  readProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
};