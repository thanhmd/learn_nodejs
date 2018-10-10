var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize.js');

const Category = sequelize.define('category', {
    name: {
      type: Sequelize.STRING
    }
  });
  
  // force: true will drop the table if it already exists
  Category.sync({force: true}).then(() => {
    // Table created
    return Category.create({
      name: 'Food'
    });
  });

  module.exports = Category