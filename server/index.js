import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = 3000 || process.env.PORT;

// db conn function 
import connectToDB from "./config/connectDB.js";



app.get("/health",(req,res)=>{
    return res.status(200).json({data:Date.now(),message:"server running healthy"});
})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectToDB();
})

