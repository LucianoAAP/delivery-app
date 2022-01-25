const mainRoute = require('express').Router({ mergeParams: true });

const userRoute = require('./userRoute');
const productsRouter = require('./ProductsRouter');
const { salesRoute } = require('./saleRoutes');

mainRoute.use('/user', userRoute);
mainRoute.use('/products', productsRouter);
mainRoute.use('/sales', salesRoute);

module.exports = mainRoute;
