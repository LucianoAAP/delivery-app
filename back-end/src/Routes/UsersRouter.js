const userRoute = require('express').Router({ mergeParams: true });
const rescue = require('express-rescue');
const {
  CreateUser,
  ReadAllUsers,
  ReadUserById,
  UpdateUser,
  DeleteUser,
} = require('../controllers');

userRoute.post('/', rescue(CreateUser));

userRoute.get('/', rescue(ReadAllUsers));

userRoute.get('/:id', rescue(ReadUserById));

userRoute.put('/:id', rescue(UpdateUser));

userRoute.delete('/:id', rescue(DeleteUser));

module.exports = userRoute;