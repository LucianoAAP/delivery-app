const Sequelize = require('sequelize');
const { Product } = require('../../database/models');

const { Op } = Sequelize;

module.exports = async (term) => Product.findAll({ where: { name: { [Op.like]: `%${term}%` } } });