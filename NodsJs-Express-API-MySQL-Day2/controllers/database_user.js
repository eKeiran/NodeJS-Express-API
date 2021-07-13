import { createConnection } from 'mysql2';

var sql = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Nirvana@1987@',
  database : 'ECOM_API',
  multipleStatements: true
});
sql.connect();

// Create a user
export const createUser = (req, res) => {
    let user = req.body;
    var set = "SET @id = ?; SET @fullName = ?;  SET @age = ?; SET @phoneNo = ?; CALL CU_User(@id, @fullName, @age, @phoneNo);";
    sql.query(set, [user.id, user.fullName, user.age, user.phoneNo], (err, rows, fields) => {
    if (!err)
    rows.forEach(element => {
    if(element.constructor == Array)
    res.send('New user has been added!');
    });
    else
    console.log(err);
    })
    }


//Find all users
export const readAllUser =  (req, res) => {
    sql.query('SELECT * FROM tb_users', (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
};

// Find a single user with a userId
export const readOneUser = (req, res) => {
    sql.query('SELECT * FROM tb_users WHERE id = ?',[req.params.ID], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
};

// Update a user
export const updateUser = (req, res) => {
    let user = req.body;
    var set = "SET @id = ?; SET @fullName = ?;  SET @age = ?; SET @phoneNo = ?;  CALL CU_User(@id, @fullName, @age, @phoneNo);";
    sql.query(set, [user.id, user.fullName, user.age, user.phoneNo], (err, rows, fields) => {
        if (!err)
    rows.forEach(element => {
    if(element.constructor == Array)
    res.send('User has been updated!');
    });
    else
    console.log(err);
    })
    }

// Delete a user with userID
export const delUser = (req, res) => {
    sql.query('DELETE FROM tb_users WHERE id = ?', [req.params.ID], (err, rows, fields) => {
    if (!err)
    res.send('User deleted successfully.');
    else
    console.log(err);
    })
}

