let users = [];
var i=1;
let ID = "";

export const createUser = (req, res) =>  {
    const user = req.body;
    const userID=i.toString();
    i++; //unique ID
    users.push({ ...user, ID: userID}); 
    res.send(`User with the name ${user.fullName} was added to the database!`); 
}

export const getUser = (req, res) => {
    res.send(users);
}

export const userID = (req, res) => {
    const { ID } = req.params; 
    const searchUser = users.find((user) => user.ID = ID);
    res.send(searchUser);
}

export const userUpdate = (req, res) => { 
    const { ID } = req.params; 
    const { fullName, age, phoneNo } = req.body; 
 
    const user = users.find((user) => user.ID === ID); 
    if(fullName) user.fullName = fullName; 
    if(age) user.age = age; 
    if(phoneNo) user.phoneNo = phoneNo; 

    res.send(`User with the ID ${ID} was updated in the database.`);
}

export const userDelete = (req, res) => {
    const { ID } = req.params; 
    users = users.filter((user) => user.ID !== ID); // False will filter the params with that ID out.
    res.send(`User with the ID ${ID} was deleted from the database.`); 
}