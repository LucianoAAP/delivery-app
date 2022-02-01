// User
const CreateUser = require('./users/CreateUser');
const CreateUserAdm = require('./users/CreateUserAdm');
const ReadAllUsers = require('./users/ReadAllUsers');
const UpdateUser = require('./users/UpdateUser');
const DeleteUser = require('./users/DeleteUser');
const ReadUserById = require('./users/ReadUserById');
const LoginUser = require('./users/LoginUser');

// Product
const ReadAllProducts = require('./products/ReadAllProducts');
const ReadProductById = require('./products/ReadProductById');
const CreateProduct = require('./products/CreateProduct');
const UpdateProduct = require('./products/UpdateProduct');
const DeleteProduct = require('./products/DeleteProduct');

// Sale
const CreateSale = require('./sales/CreateSale');
const ReadAllSales = require('./sales/ReadAllSales');
const ReadSaleById = require('./sales/ReadSaleById');
const UpdateSales = require('./sales/UpdateSale');
const DeleteSales = require('./sales/DeleteSale');

module.exports = {
  CreateUser,
  CreateUserAdm,
  ReadAllUsers,
  UpdateUser,
  DeleteUser,
  ReadUserById,
  LoginUser,

  ReadAllProducts,
  ReadProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,

  CreateSale,
  ReadAllSales,
  ReadSaleById,
  UpdateSales,
  DeleteSales,
};
