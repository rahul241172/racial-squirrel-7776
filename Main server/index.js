const passport = require("./Configs/oauth");
const express = require("express");
const {connection} = require("./Configs/db");
const app = express();
const {UserModel} = require("./Models/user.model");

app.get("/",(req,res) => {
    res.send("Welcome to backend");
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  async function(req, res) {
    // Successful authentication, redirect home.
    // return value will be received here in req.user
    // console.log(req.user);

    //check if user already exists
    const userExist = await UserModel.find({email:req.user.email});
    if(userExist.length > 0){
        // console.log("User already exists");
        res.redirect('/');
    }
    else{
        const new_user = new UserModel(req.user);
        await new_user.save();
        // console.log("User created");
        res.redirect('/');
    }
    
  });

app.listen(4500, async () => {
    try{
        await connection;
        console.log("Connected to Database");
    }
    catch(err){
        console.log(err.message);
    }
    console.log("Server is running at port 4500");
})

