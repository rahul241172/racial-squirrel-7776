const tokenkey = process.env.tokenkey;
const jwt = require("jsonwebtoken");
const {UserModel} = require("../Models/user.model");

const auth = async (req,res,next) => {
    const token = req.headers.authorization.split(" ")[1];
    try{
        const validToken = jwt.verify(token,tokenkey);
        const userExists = await UserModel.find({_id:validToken.userID});
        if(userExists.length > 0){
            req.userDetails = userExists[0];
            next();
        }
        else{
            res.send({"message":"Unauthorized"});
        }
    }
    catch(err){
        res.send({"message":"Something went wrong","error":err.message});
    }
}

module.exports = {auth};