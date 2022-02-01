// User
const CreateUserService = require('./users/CreateUserService');
const CreateUserAdmService = require('./users/CreateUserAdmService');
const ReadAllUsersService = require('./users/ReadAllUsersService');
const UpdateUserService = require('./users/UpdateUserService');
const DeleteUserService = require('./users/DeleteUserService');
const ReadUserByIdService = require('./users/ReadUserByIdService');
const LoginUserService = require('./users/LoginUserService');

// Product
const ReadAllProductsService = require('./products/ReadAllProducts');
const ReadProductsByTermService = require('./products/ReadProductsByTerm');
const ReadProductByIdService = require('./products/ReadProductById');
const CreateProductService = require('./products/CreateProduct');
const UpdateProductService = require('./products/UpdateProduct');
const DeleteProductService = require('./products/DeleteProduct');

// Sale
const CreateSaleService = require('./sales/CreateSaleService');
const ReadAllSalesService = require('./sales/ReadAllSalesService');
const ReadSaleByIdService = require('./sales/ReadSaleByIdService');
const UpdateSaleService = require('./sales/UpdateSaleService');
const DeleteSaleService = require('./sales/DeleteSaleService');

module.exports = {
  CreateUserService,
  CreateUserAdmService,
  ReadAllUsersService,
  UpdateUserService,
  DeleteUserService,
  ReadUserByIdService,
  LoginUserService,

  ReadAllProductsService,
  ReadProductsByTermService,
  ReadProductByIdService,
  CreateProductService,
  UpdateProductService,
  DeleteProductService,

  CreateSaleService,
  ReadAllSalesService,
  ReadSaleByIdService,
  UpdateSaleService,
  DeleteSaleService,
};
