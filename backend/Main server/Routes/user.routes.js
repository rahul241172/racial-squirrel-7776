const express = require("express");
const {UserModel} = require("../Models/user.model");

const userRoute = express.Router();

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