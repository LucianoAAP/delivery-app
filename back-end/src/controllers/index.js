const CreateUser = require('./users/CreateUser');
const ReadAllusers = require('./users/ReadAllUsers');
const Updateuser = require('./users/UpdateUser');
const DeleteUser = require('./users/DeleteUser');
const ReadUserById = require('./users/ReadUserById');

const readAllProducts = require('./products/ReadAllProducts');
const readProductsByTerm = require('./products/ReadProductsByTerm');
const readProductById = require('./products/ReadProductById');
const createProduct = require('./products/CreateProduct');
const updateProduct = require('./products/UpdateProduct');
const deleteProduct = require('./products/DeleteProduct');

const createSale = require('./Sales/createSale');
const readSale = require('./Sales/readSales');
const readSaleById = require('./Sales/readSaleById');
const updateSales = require('./Sales/updateSales');
const deleteSales = require('./Sales/deleteSales');

module.exports = {
  CreateUser,
  ReadAllusers,
  Updateuser,
  DeleteUser,
  ReadUserById,
  readAllProducts,
  readProductsByTerm,
  readProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createSale,
  readSale,
  readSaleById,
  updateSales,
  deleteSales,
};
