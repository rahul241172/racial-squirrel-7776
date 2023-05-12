require("dotenv").config();
const passport = require("passport");
const client_id = process.env.googleClientId;
const client_key = process.env.googleClientKey;
const { v4: uuidv4 } = require('uuid');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: client_id,
    clientSecret: client_key,
    callbackURL: "https://wild-gray-gorilla-garb.cyclic.app/auth/google/callback",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, cb) {
    // const user_email = profile.__json.email;
    //create user by user model
    //password : uuidv4();
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    const user = {
      "email" : profile._json.email,
      "email_verified" : profile._json.email_verified,
      "family_name" : profile._json.family_name,
      "given_name" : profile._json.given_name,
      "name" : profile._json.name,
      "picture" : profile._json.picture,
      "sub" : profile._json.sub,
    }
    // console.log(profile);
    return cb(null,user);
  }
));

module.exports = passport;