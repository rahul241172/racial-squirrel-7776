const express = require('express');
const StatusModel = require('../Model/statusModel');
const StatusRouter = express.Router()

//creating status
StatusRouter.post("/create",async(req,res)=>{
    const status = req.body
  let data = await StatusModel.create(status)
// await update.save()

res.send({msg:"status added successfully",status:data})

})


module.exports={
    StatusRouter
}