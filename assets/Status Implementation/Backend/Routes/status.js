const express = require('express');
const StatusModel = require('../Model/statusModel');
const StatusRouter = express.Router()

StatusModel
StatusRouter.post("/create",async(req,res)=>{
    const status = req.body
    let time = datetime.toLocaleTimeString();
let data = new StatusModel({

})

await data.save()
res.send({time})
res.send("status added successfully")

})


module.exports={
    StatusRouter
}