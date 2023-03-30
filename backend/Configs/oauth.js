require("dotenv").config();
const passport = require("../index");
const client_id = process.env.googleClientId;
const client_key = process.env.googleClientKey;
const { v4: uuidv4 } = require('uuid');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: client_id,
    clientSecret: client_key,
    callbackURL: "http://localhost:4500/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    const user_email = profile.__json.email;
    //create user by user model
    //password : uuidv4();

    return cb(null, user);
  }
));
