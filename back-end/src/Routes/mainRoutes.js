const mainRoutes = require('express').Router({ mergeParams: true });

const userRoute = require('./UsersRouter');
const productsRouter = require('./ProductsRouter');
const salesRouter = require('./SalesRouter');

mainRoutes.use('/users', userRoute);
mainRoutes.use('/products', productsRouter);
mainRoutes.use('/sales', salesRouter);

module.exports = mainRoutes;
