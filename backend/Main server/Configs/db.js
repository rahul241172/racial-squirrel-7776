const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.mongoURL;

const connection = mongoose.connect(mongoURL);

module.exports = {connection};