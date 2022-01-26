const mainRoutes = require('express').Router({ mergeParams: true });

const usersRouter = require('./UsersRouter');
const productsRouter = require('./ProductsRouter');
const salesRouter = require('./SalesRouter');
const loginRouter = require('./LoginRouter');

mainRoutes.use('/users', usersRouter);
mainRoutes.use('/products', productsRouter);
mainRoutes.use('/sales', salesRouter);
mainRoutes.use('/login', loginRouter);

module.exports = mainRoutes;
