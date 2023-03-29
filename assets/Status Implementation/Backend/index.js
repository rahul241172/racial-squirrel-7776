const { connection } = require("./Config/db");
const express = require('express');
const app = express()
require("dotenv").config();


app.use(express.json())


app.listen(process.env.port,async()=>{
    console.log(`server is running on port ${process.env.port}`)
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log({error:error,mssg:"finding error while connecting"})
    }
})