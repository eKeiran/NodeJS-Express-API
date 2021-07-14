import sequelize from "../connection/Sequelize_connection.js";

const Users = sequelize.define('tb_users', {  fullName: sequelize.Sequelize.STRING, age: sequelize.Sequelize.INTEGER, phoneNo: sequelize.Sequelize.BIGINT });

Users.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Users.bulkCreate([
      { fullName: "Percy Jackson", age: 17, phoneNo: 9445678912  },
      { fullName: "Harry Potter", age: 27, phoneNo: 8470705912  },
      { fullName: "Katniss Everdeen", age: 19, phoneNo: 7866442298 }
    ]).then(function() {
      return Users.findAll();
    }).then(function(users) {
      console.log(users);
    });
  });
  
export const createUser = ('/', function(req, res) {
  Users.create({ fullName: req.body.fullName, age: req.body.age, phoneNo: req.body.phoneNo });
    res.json("User Added!");
  
});

export const readAllUser = ('/', function(req, res) {
  Users.findAll().then(users => res.json(users));
});  

export const readOneUser = ('/', function(req, res) {
  Users.findAll({ where: { id: req.params.id } }).then(users => res.json(users));
});

export const updateUser = ('/', function(req, res) {
  Users.findByPk(req.params.id).then(function(users) {
    users.update({
      fullName: req.body.fullName,
      age: req.body.age,
      phoneNo: req.body.phoneNo
    });
      res.json("User Updated!");
  });
});

export const delUser = ('/', function(req, res) {
  Users.findByPk(req.params.id).then(function(users) {
    users.destroy();
  });
    res.json("User Deleted!");
});

export default Users;