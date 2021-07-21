import sequelize from "../connection/Sequelize_connection.js";

const Products = sequelize.define('tb_products', {  prodName: sequelize.Sequelize.STRING, brand: sequelize.Sequelize.STRING, price: sequelize.Sequelize.INTEGER });
Products.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Products.bulkCreate([
      { prodName: "LED TV", brand: "Sony", price: 50000 },
      { prodName: "Mountain Bike", brand: "Keysto", price: 1200 },
      { prodName: "Air Conditioner", brand: "Panasonic", price: 30000 }
    ]).then(function() {
      return Products.findAll();
    }).then(function(products) {
      console.log(products);
    });
  });

  
// PRODUCTS CURD OPERATIONS:

export const readAllProduct = ('/products', function(req, res) {
  Products.findAll().then(products => res.json(products));
});  

export const readOneProduct = ('/products/:id', function(req, res) {
  Products.findAll({ where: { id: req.params.id } }).then(products => res.json(products));
});

export const createProduct = ('/products', function(req, res) {
Products.create({ prodName: req.body.prodName, brand: req.body.brand, price: req.body.price });
  res.json("Product Added!");

});

export const updateProduct = ('/products/:id', function(req, res) {
Products.findByPk(req.params.id).then(function(products) {
  products.update({
        prodName: req.body.prodName,
        brand: req.body.brand,
        price: req.body.price
       });
  res.json("Product Updated!");
  });
});

export const delProduct = ('/products/:id', function(req, res) {
Products.findByPk(req.params.id).then(function(products) {
  products.destroy();
});
  res.json("Product Deleted!");
});

export default Products;