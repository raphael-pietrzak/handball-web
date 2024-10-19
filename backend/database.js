const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('handball_db', 'mhbc', 'mhbc', {
    host: 'localhost',
    dialect: 'postgres',
  });


module.exports = sequelize;