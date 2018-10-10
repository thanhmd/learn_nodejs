var Sequelize = require('sequelize');
var sequelize = require('../util/sequelize.js');

const Product = sequelize.define('product', {
    name: {
      type: Sequelize.STRING,
      get(field) {
        //const price = this.getDataValue('price');
        // 'this' allows you to access attributes of the instance
        return this.getDataValue(field);
      },
    },
    price: {
        type: Sequelize.DOUBLE
    },
    description: {
        type: Sequelize.TEXT
    }
  });
  
//   force: true will drop the table if it already exists
//   Product.sync({force: true}).then(() => {
//     Product.create({
//       name: 'My an lien',
//       price: 6000,
//       description: 'Khoai tay omachi'
//     });
//     Product.create({
//         name: 'Sua tuoi vinamilk',
//         price: 5000,
//         description: 'Con bo cuoi'
//       });
//       Product.create({
//         name: 'Banh snake',
//         price: 3000,
//         description: 'huong vi cay'
//       });
//   });
Product
  .create({ name: 'sua dac', price: '10000', description : 'sua ong tho' })
  .then(product => {
    console.log(product.get('name')); // John Doe (SENIOR ENGINEER)
    console.log(product.get('description')); // SENIOR ENGINEER
  })

// async function getProducts(){
//     console.log("In")
//     return await Product.findAll();
    
// }

module.exports = Product // hoc ki lai cau lenh import va export
// module.exports.getProducts = getProducts