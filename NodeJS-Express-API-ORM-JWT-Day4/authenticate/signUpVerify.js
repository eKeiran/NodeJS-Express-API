import Users from '../controllers/database_user.js';

export const checkDuplicateEmailAndPhone = (req, res, next) => {
    console.log("Processing func -> SignUp");
    Users.findOne({where: {email: req.body.email}}).then(user => {
        if(user){
            res.status(400).send("Fail -> Email is already taken! Log in instead.");
            return;
        }
    Users.findOne({where: {phoneNo: req.body.phoneNo}}).then(user => {
            if(user){
                res.status(400).send("Fail -> Phone Number is already taken! Log in instead.");
                return;
            }
		    next();
        });
    });
};