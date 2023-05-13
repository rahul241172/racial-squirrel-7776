const passport = require("./Configs/oauth");
const express = require("express");
const {connection} = require("./Configs/db");
const {userRoute} = require("./Routes/user.routes");
const app = express();
const {UserModel} = require("./Models/user.model");
const jwt = require("jsonwebtoken");
const tokenkey = process.env.tokenkey;
const reftokenkey = process.env.reftokenkey;
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/user",userRoute);

app.get("/",(req,res) => {
    // res.redirect(__dirname+"../message/frontend/messagepage.html");
    res.send("Homepage")
})

app.get("/auth/google/success",(req,res) => {
    

   res.sendFile(path.join(__dirname,"/Frontend/messagepage.html"));
})


// o auth logic

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
 passport.authenticate('google', {
    successRedirect: '/auth/google/success',
    failureRedirect: '/google/failure',
    session: false

  })
    
  );

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

