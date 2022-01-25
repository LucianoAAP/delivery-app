const userRoute = require('express').Router({ mergeParams: true });
const rescue = require('express-rescue');
const {
  CreateUser,
  ReadAllusers,
  ReadUserById,
  Updateuser,
  DeleteUser,
} = require('../controllers');

userRoute.post('/', rescue(CreateUser));

userRoute.get('/', rescue(ReadAllusers));

userRoute.get('/:id', rescue(ReadUserById));

userRoute.put('/:id', rescue(Updateuser));

userRoute.delete('/:id', rescue(DeleteUser));

module.exports = userRoute;