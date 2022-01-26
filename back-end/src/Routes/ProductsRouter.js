const rescue = require('express-rescue');
const productsRouter = require('express').Router({ mergeParams: true });
const {
  ReadAllProducts,
  ReadProductById,
  CreateProduct,
  UpdateProduct,
  DeleteProduct,
} = require('../controllers');

productsRouter.get('/', rescue(ReadAllProducts));
productsRouter.get('/:id', rescue(ReadProductById));
productsRouter.post('/', rescue(CreateProduct));
productsRouter.put('/:id', rescue(UpdateProduct));
productsRouter.delete('/:id', rescue(DeleteProduct));

module.exports = productsRouter;