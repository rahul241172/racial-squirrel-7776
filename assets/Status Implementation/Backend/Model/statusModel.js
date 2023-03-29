const mongoose = require('mongoose');
const StatusSchema = mongoose.Schema({

    name:String,
    image:String,
    about:String,
    views:Number,
    time:String
},{ timestamps: true})

  const StatusModel = mongoose.model("Status",StatusSchema)

  module.exports=StatusModel