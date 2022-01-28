const { user } = require('../../database/models');

const readAllUsersService = async () => {
  const users = await user.findAll({ attributes: { exclude: ['password'] } });

  return users;
};

module.exports = readAllUsersService;