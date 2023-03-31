const express = require('express');
const StatusModel = require('../Model/statusModel');
const StatusRouter = express.Router()

//creating status
StatusRouter.post("/create",async(req,res)=>{
    const status = req.body
  let data = await StatusModel.create(status)
//    await data.save()

res.send({msg:"status added successfully",status:data})

})


//getting status
StatusRouter.get("/readStatus", async (req, res) => {
    
    try {
        const status = await StatusModel.find();
        res.send(status);
    } catch (error) {
        
        res.send("please update status");
    }
})

//deleting status
StatusRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await StatusModel.findByIdAndDelete(id);
        res.send("Status deleted");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

module.exports={
    StatusRouter
}