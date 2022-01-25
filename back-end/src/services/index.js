const readAllProductsService = require('./products/ReadAllProducts');
const readProductsByTermService = require('./products/ReadProductsByTerm');
const readProductByIdService = require('./products/ReadProductById');
const createProductService = require('./products/CreateProduct');
const updateProductService = require('./products/UpdateProduct');
const deleteProductService = require('./products/DeleteProduct');

module.exports = {
  readAllProductsService,
  readProductsByTermService,
  readProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
};