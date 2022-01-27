const loginRouter = require('express').Router({ mergeParams: true });
const rescue = require('express-rescue');
const { LoginUser } = require('../controllers');

loginRouter.post('/', rescue(LoginUser));

module.exports = loginRouter;