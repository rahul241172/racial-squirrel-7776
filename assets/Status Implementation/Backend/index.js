const { connection } = require("./Config/db");
const express = require('express');
const { StatusRouter } = require("./Routes/status");
const app = express()
require("dotenv").config();


app.use(express.json())
app.use("/status",StatusRouter)


app.get("/",(req,res)=>{
    res.send("welcome to status page")
})

app.listen(process.env.port,async()=>{
    console.log(`server is running on port ${process.env.port}`)
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log({error:error,mssg:"finding error while connecting"})
    }
})