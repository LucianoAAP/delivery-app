const { User } = require('../../database/models');

const readAllUsersService = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = readAllUsersService;