const mainRoute = require('express').Router({ mergeParams: true });
const userRoute = require('./userRoute');
const productsRouter = require('./ProductsRouter');

mainRoute.use('/user', userRoute);
mainRoute.use('/products', productsRouter);

module.exports = mainRoute;