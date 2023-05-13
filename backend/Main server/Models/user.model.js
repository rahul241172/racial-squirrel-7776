const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        
    },
    email_verified: {
        type: Boolean,
        
    },
    family_name: {
        type: String,
        
    },
    given_name: {
        type: String,
        
    },
    name: {
        type: String,
        
    },
    picture: {
        type: String
    },
    sub: {
        type: String,
        
    },
    password: {
        type: String
    }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel};