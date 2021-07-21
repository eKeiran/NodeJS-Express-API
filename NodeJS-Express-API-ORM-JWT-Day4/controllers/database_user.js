import sequelize from "../connection/Sequelize_connection.js";
import jwt from 'jsonwebtoken';
import config from '../authenticate/config.js';

const Users = sequelize.define('tb_users', {  fullName: sequelize.Sequelize.STRING, email:sequelize.Sequelize.STRING, password: sequelize.Sequelize.STRING, role: sequelize.Sequelize.STRING, age: sequelize.Sequelize.INTEGER, phoneNo: sequelize.Sequelize.BIGINT });

Users.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);

    Users.bulkCreate([
      { fullName: "Percy Jackson", email: "percy@gmail.com", password: "percy@17", role:"Admin" ,age: 17, phoneNo: 9445678912  },
      { fullName: "Harry Potter",  email: "harry@gmail.com", password: "harry@27", role:"User", age: 27, phoneNo: 8470705912  },
      { fullName: "Katniss Everdeen",  email: "katniss@gmail.com", password: "katniss@19", role:"User", age: 19, phoneNo: 7866442298 }
    ]).then(function() {
      return Users.findAll();
    }).then(function(users) {
      console.log(users);
    });
  });
  
  export const signUp = ('/', function (req, res) {
	Users.create({fullName: req.body.fullName, age: req.body.age, phoneNo: req.body.phoneNo, email: req.body.email, role:"User", password: req.body.password});
	res.json("Sign Up Successfull!");
});

export const signIn = ('/', function (req, res) {
	console.log("Sign-In");
	Users.findOne({where: {email: req.body.email}}).then(user => {
		if (!user) {
			return res.send('User Not Found.');
		}
		var pass = req.body.password;
		if (pass!=user.password) {
			return res.send('Incorrect Password!');
		}
		
		else{
		var token = jwt.sign({ id: user.id, email:user.email }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours
		});
	/*To check the password, I was first using bycrpt comapreSync function which returns a boolean value. It was not working and returning false even when the passwords matched
	Here's the code:
	
	var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
	if (!passwordIsValid) {
	return res.status(401).send({'Invalid Password!'});
	else {
	var token = jwt.sign({ id: user.id }, config.secret, {
	expiresIn: 86400 // expires in 24 hours
	}});
	*/
  }
		
		res.status(200).send({ auth: true, accessToken: token });
		
	}).catch(err => {
		res.status(500).send('Error -> ' + err);
	});
});


export const userInfo = ('/', function(req, res, next) {
		
	Users.findAll({ where: { id: req.id } }).then(users => res.json(users));
});


export const allUserInfo = ('/', function(req, res) {
	Users.findOne({where: {email: req.email}}).then(user => {
        if(user.role != "Admin" ){
            res.status(403).send("Require's Admin Role!");
            return;
        }
        else{
		Users.findAll().then(users => res.json(users));
		}
    })
});  
  
export const readOneUser = ('/', function(req, res) {
	Users.findOne({where: {email: req.email}}).then(user => {
		if(user.role != "Admin" ){
		res.status(403).send("Require's Admin Role!");
		return;
		}
		else{
	Users.findAll({ where: { id: req.params.id } }).then(users => res.json(users));
		}
	}
	)});
	
export const updateUser = ('/', function(req, res) {
	Users.findOne({where: {email: req.email}}).then(user => {
        		if(user.role != "Admin" ){
            	res.status(403).send("Require's Admin Role!");
            	return;
        		}
				else{
 		 		Users.findByPk(req.params.id).then(function(users) {
   		 		users.update({
				fullName: req.body.fullName, age: req.body.age, phoneNo: req.body.phoneNo, email: req.body.email, role:req.body.role, password: req.body.password
   					 });
      		res.json("User Updated!");
	  		})
		}
	})
});

export const delUser = ('/', function(req, res) {
	Users.findOne({where: {email: req.email}}).then(user => {
		if(user.role != "Admin" ){
		res.status(403).send("Require's Admin Role!");
		return;
		}
		else{
  Users.findByPk(req.params.id).then(function(users) {
    users.destroy();
  });
    res.json("User Deleted!");
		}
	}
)});

export default Users;
