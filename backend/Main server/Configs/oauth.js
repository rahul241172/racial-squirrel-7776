require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const client_id = process.env.googleClientId;
const client_key = process.env.googleClientKey;
const {UserModel} = require("../Models/user.model")


passport.use(new GoogleStrategy({
    clientID: client_id,
    clientSecret: client_key,
   callbackURL: "https://wild-gray-gorilla-garb.cyclic.app/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, done) {

   let email = profile.emails[0].value;
      let udata = await UserModel.findOne({ email });
      if (udata) {
        return done(null, udata);
      }
   
      const user = new UserModel(profile._json);
      await user.save();
      return done(null, user);
  }
));

module.exports = passport;
