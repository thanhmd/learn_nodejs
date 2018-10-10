const Sequelize = require('sequelize');

const sequelize = new Sequelize('demo_nodejs', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
    // SQLite only
    //storage: 'path/to/database.sqlite'
  });
  

  module.exports = sequelize