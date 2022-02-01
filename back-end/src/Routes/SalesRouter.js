const rescue = require('express-rescue');
const salesRouter = require('express').Router({ mergeParams: true });
const authorizeToken = require('../middlewares/authorizeToken');

const {
  CreateSale,
  ReadAllSales,
  ReadSaleById,
  UpdateSales,
  DeleteSales,
} = require('../controllers');

salesRouter.get('/', rescue(authorizeToken), rescue(ReadAllSales));
salesRouter.get('/:id', rescue(authorizeToken), rescue(ReadSaleById));
salesRouter.put('/:id', rescue(authorizeToken), rescue(UpdateSales));
salesRouter.delete('/:id', rescue(authorizeToken), rescue(DeleteSales));
salesRouter.post('/', rescue(authorizeToken), rescue(CreateSale));

module.exports = salesRouter;
