const express = require("express");
const {UserModel} = require("../Models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRoute = express.Router();

//registering user
userRoute.post("/register",async(req,res) => {
    const {name,email,password} = req.body;
    try{
        const existingUser = await UserModel.find({email});
        if(existingUser.length == 0){
            bcrypt.hash(password, 5, async (err,hash) => {
                const user = new UserModel({name,email,password:hash});
                await user.save();
                res.send({"message":"User registered Successfully"});
            })
        }
        else{
            res.send({"message":"User already exists"});
        }
    }
    catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
    }
})

//user login
userRoute.post("/login", async(req,res) => {
    const userDetail = req.body;
     try{
        const user = await UserModel.find({email:userDetail.email});
        if(user.length > 0){
            bcrypt.compare(userDetail.password, user[0].password, (err,result) => {
                if(result){
                    const token = jwt.sign({userID:user[0]._id},"somekey",{expiresIn: '1h'});
                    res.send({"message":"Log-In Success","token":token,"help":"You can use this token to access protected routes","username":`${user[0].name}`,"userID":`${user[0]._id}`});
                }
                else{
                    res.send({"message":"Login Failed, Invalid Credentials"});
                }
            })
        }
        else{
            res.send({"message":"Login Failed, Invalid Credentials"});
        }
     }
     catch(err){
        res.send({"message":"Something Went Wrong","error":err.message});
     }
})

//get all users
userRoute.get("/all",async (req,res) => {
    try{
        const allUsers = await UserModel.find();
        res.send(allUsers);
    }
    catch(err){
        res.send({"message":"Something went wrong","error":err.message});
    }
})

//get users by their id
userRoute.get("/:id", async (req,res) => {
    const {id} = req.params;
    try{
        const user = await UserModel.find({_id:id});
        if(user.length > 0){
            res.send(user);
        }
        else{
            res.send({"message":"Please enter a valid ID"});
        }
    }
    catch(err){
        res.send({"message":"Something went wrong","error":err.message});
    }
})


//delete users by their id
userRoute.delete("/:id",async (req,res) => {
    const {id} = req.params;
    try{
        const user = await UserModel.findByIdAndDelete({_id:id});
        res.send({"message":"User deleted Successfully"});
    }
    catch(err){
        res.send({"message":"Something went wrong","error":err.message});
    }
})

module.exports = {userRoute};