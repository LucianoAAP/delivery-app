const usersRouter = require('express').Router({ mergeParams: true });
const rescue = require('express-rescue');
const {
  CreateUser,
  CreateUserAdm,
  ReadAllUsers,
  ReadUserById,
  UpdateUser,
  DeleteUser,
} = require('../controllers');
const authorizeToken = require('../middlewares/authorizeToken');

usersRouter.post('/', rescue(CreateUser));

usersRouter.post('/admin', rescue(authorizeToken), rescue(CreateUserAdm));

usersRouter.get('/', rescue(authorizeToken), rescue(ReadAllUsers));

usersRouter.get('/:id', rescue(authorizeToken), rescue(ReadUserById));

usersRouter.put('/:id', rescue(authorizeToken), rescue(UpdateUser));

usersRouter.delete('/:id', rescue(authorizeToken), rescue(DeleteUser));

module.exports = usersRouter;