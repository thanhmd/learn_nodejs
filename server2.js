var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// var db_conection = require('./util/db');

var sequelize = require('./util/sequelize');
var Sequelize = require('sequelize');
// var Category = require('./model/Category')
var Product = require('./model/Product')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

var port = 3000;

var router = express.Router();

async function getProducts(){
    return await Product.findAll();
}

router.get('/products', async function(req, res) {
    // db_conection.query('SELECT * FROM Product', function (err, rows, fields) {
    //     if (err) throw err
    //     //console.log(rows)
    //     res.json(rows)
    //   })

    // Product.findAll().then(products => {
    //     res.json(products)
    // })

    //dung findOne
    //dung where
    //xac dinh co bao connection khi dc ket noi toi sequelize
    //nhan xet cho ban than minh khi dung sequelize

    const {gt, lte, ne, in: opIn, gte, lt, like} = Sequelize.Op;
    // var products = await Product.findAll(
    //     {
    //         where: {
    //             price: {
    //             [gte]: 5000
    //             }
    //         }
    //     }
    // ).catch(function(error){
    //     console.log(error)
    // });

    var products = await Product.findAll({
        where : {
            description: {
                [like] : '%ay%'
            }
        }
    })

    res.json(products)
});

app.use('/api', router);

app.listen(port);
console.log('Connected ' + port);