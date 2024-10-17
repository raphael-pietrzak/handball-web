const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('handball_db', 'admin', 'azerty', {
    host: 'localhost',
    dialect: 'postgres',
  });


module.exports = sequelize;