const express = require('express');
const StatusModel = require('../Model/statusModel');
const StatusRouter = express.Router()

StatusModel
StatusRouter.post("/create",async(req,res)=>{
    const status = req.body
let data = await StatusModel.create(status)
let time = data.createdAt;
// await data.save()
req.send(time)
res.send("status added successfully")

})


module.exports={
    StatusRouter
}