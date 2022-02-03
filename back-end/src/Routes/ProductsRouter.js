const rescue = require('express-rescue');
const productsRouter = require('express').Router({ mergeParams: true });
const {
  ReadAllProducts,
  ReadProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require('../controllers');
const authorizeToken = require('../middlewares/authorizeToken');

productsRouter.get('/', rescue(authorizeToken), rescue(ReadAllProducts));
productsRouter.get('/:id', rescue(authorizeToken), rescue(ReadProductById));
productsRouter.post('/', rescue(authorizeToken), rescue(CreateProduct));
productsRouter.put('/:id', rescue(authorizeToken), rescue(UpdateProduct));
productsRouter.delete('/:id', rescue(authorizeToken), rescue(DeleteProduct));

module.exports = productsRouter;