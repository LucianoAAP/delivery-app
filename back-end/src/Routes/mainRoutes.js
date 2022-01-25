const mainRoute = require('express').Router({ mergeParams: true });

mainRoute.use('/');

module.exports = mainRoute;