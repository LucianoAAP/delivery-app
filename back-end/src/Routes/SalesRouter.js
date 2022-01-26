const rescue = require('express-rescue');
const salesRouter = require('express').Router({ mergeParams: true });
const {
  CreateSale,
  ReadAllSales,
  ReadSaleById,
  UpdateSales,
  DeleteSales,
} = require('../controllers');

salesRouter.get('/', rescue(ReadAllSales));
salesRouter.get('/:id', rescue(ReadSaleById));
salesRouter.put('/:id', rescue(UpdateSales));
salesRouter.delete('/:id', rescue(DeleteSales));
salesRouter.post('/', rescue(CreateSale));

module.exports = salesRouter;
