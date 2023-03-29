const mongoose = require('mongoose');
const StatusSchema = mongoose.Schema({

    name:String,
    image:String,
    about:String,
    views:{default:0,type:Number},
    Time:String 
 },{timestamps:{ createdAt: true, updatedAt: false }
})

  const StatusModel = mongoose.model("Status",StatusSchema)

  module.exports=StatusModel