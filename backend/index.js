const express = require("express");
const passport = require("passport");

const app = express();

app.get("/",(req,res) => {
    res.send("Welcome to backend");
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login', session:false }),
  function(req, res) {
    // Successful authentication, redirect home.
    //return value will be received here
    console.log(req.user);
    res.redirect('/');
  });

app.listen(4500,() => {
    console.log("Server is running at port 4500");
})

module.exports = {passport};