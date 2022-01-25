const mainRoute = require('express').Router({ mergeParams: true });
const userRoute = require('./userRoute');

mainRoute.use('/user', userRoute);

module.exports = mainRoute;