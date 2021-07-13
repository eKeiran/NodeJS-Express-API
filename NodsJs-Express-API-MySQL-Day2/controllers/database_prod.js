import { createConnection } from 'mysql2';

var sql = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Nirvana@1987@',
  database : 'ECOM_API',
  multipleStatements: true
});
sql.connect();


// Create a product
export const createProduct = (req, res) => {
  let prod = req.body;
  var set = "SET @id = ?; SET @prodName = ?;  SET @brand = ?; SET @price = ?; CALL CU_Product(@id, @prodName, @brand, @price);";
  sql.query(set, [prod.id, prod.prodName, prod.brand, prod.price], (err, rows, fields) => {
  if (!err)
  rows.forEach(element => {
  if(element.constructor == Array)
  res.send('New product has been added!');
  });
  else
  console.log(err);
  })
  }

// Read existing products
export const readAllProduct =  (req, res) => {
    sql.query('SELECT * FROM tb_products', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
};


// Read a single product with a product ID
export const readOneProduct = (req, res) => {
  sql.query('SELECT * FROM tb_products WHERE id = ?',[req.params.ID], (err, rows, fields) => {
  if (!err)
  res.send(rows);
  else
  console.log(err);
  })
};

// Update a product
export const updateProduct = (req, res) => {
  let prod = req.body;
  var set = "SET @id = ?; SET @prodName = ?;  SET @brand = ?; SET @price = ?; CALL CU_Product(@id, @prodName, @brand, @price);";
  sql.query(set, [prod.id, prod.prodName, prod.brand, prod.price], (err, rows, fields) => {
      if (!err)
  rows.forEach(element => {
  if(element.constructor == Array)
  res.send('Product has been updated!');
  });
  else
  console.log(err);
  })
  }

// Delete a products with product ID
export const delProduct = (req, res) => {
  sql.query('DELETE FROM tb_products WHERE id = ?', [req.params.ID], (err, rows, fields) => {
  if (!err)
  res.send('Product deleted successfully.');
  else
  console.log(err);
  })
}

