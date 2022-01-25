const { Sale } = require('../../database/models');

module.exports = async () => {
  const sales = await Sale.findAll();

  return sales;
};
