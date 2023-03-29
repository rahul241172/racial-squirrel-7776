const express = require('express');
const StatusModel = require('../Model/statusModel');
const StatusRouter = express.Router()

StatusModel
StatusRouter.post("/create",async(req,res)=>{
    const {name,image,about,views,time} = req.body
  
let data = new StatusModel({
name,
image,
about,
views,
time:data.createdAt
})

await data.save()
res.send(data)
res.send("status added successfully")

})


module.exports={
    StatusRouter
}