const rescue = require('express-rescue');
const salesRoute = require('express').Router({ mergeParams: true });
const {
  createSale,
  readSale,
  readSaleById,
  updateSales,
  deleteSales,
} = require('../controllers');

salesRoute.get('/:id', rescue(readSaleById));
salesRoute.put('/:id', rescue(updateSales));
salesRoute.delete('/:id', rescue(deleteSales));
salesRoute.post('/', rescue(createSale));
salesRoute.get('/', rescue(readSale));

module.exports = { salesRoute };
