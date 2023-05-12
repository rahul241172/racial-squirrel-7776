const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    email_verified: {
        type: Boolean,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    sub: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {UserModel};