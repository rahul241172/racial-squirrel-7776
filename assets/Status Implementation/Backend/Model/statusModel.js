const mongoose = require('mongoose');
const StatusSchema = mongoose.Schema({

    name:String,
    image:String,
    about:String,
    views:[{default:1,type:Number}]
},{ timestamps: {
    createdAt: 'created_at' 
  }})

  const StatusModel = mongoose.model("Status",StatusSchema)

  module.exports=StatusModel