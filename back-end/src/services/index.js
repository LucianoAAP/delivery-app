const CreateUserService = require('./users/CreateUserService');
const ReadAllusersService = require('./users/ReadAllUsersService');
const UpdateUserService = require('./users/UpdateUserService');
const DeleteUserService = require('./users/DeleteUserService');
const ReadUserByIdService = require('./users/ReadUserByIdService');
const readAllProductsService = require('./products/ReadAllProducts');
const readProductsByTermService = require('./products/ReadProductsByTerm');
const readProductByIdService = require('./products/ReadProductById');
const createProductService = require('./products/CreateProduct');
const updateProductService = require('./products/UpdateProduct');
const deleteProductService = require('./products/DeleteProduct');

module.exports = {
  CreateUserService,
  ReadAllusersService,
  UpdateUserService,
  DeleteUserService,
  ReadUserByIdService,
  readAllProductsService,
  readProductsByTermService,
  readProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
};