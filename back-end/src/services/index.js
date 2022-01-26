const CreateUserService = require('./users/CreateUserService');
const ReadAllUsersService = require('./users/ReadAllUsersService');
const UpdateUserService = require('./users/UpdateUserService');
const DeleteUserService = require('./users/DeleteUserService');
const ReadUserByIdService = require('./users/ReadUserByIdService');

const ReadAllProductsService = require('./products/ReadAllProducts');
const ReadProductsByTermService = require('./products/ReadProductsByTerm');
const ReadProductByIdService = require('./products/ReadProductById');
const CreateProductService = require('./products/CreateProduct');
const UpdateProductService = require('./products/UpdateProduct');
const DeleteProductService = require('./products/DeleteProduct');

const CreateSaleService = require('./sales/CreateSaleService');
const ReadAllSalesService = require('./sales/ReadAllSalesService');
const ReadSaleByIdService = require('./sales/ReadSaleByIdService');
const UpdateSaleService = require('./sales/UpdateSaleService');
const DeleteSaleService = require('./sales/DeleteSaleService');

module.exports = {
  CreateUserService,
  ReadAllUsersService,
  UpdateUserService,
  DeleteUserService,
  ReadUserByIdService,
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
