import express from "express";
import { config } from "dotenv";
config();

const app = express();
const PORT = 3000 || process.env.PORT;

// middlewares
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));


// db conn function 
import connectToDB from "./config/connectDB.js";
import responder from "./utils/responder.js";


// controllers
import { postSignup } from "./controllers/auth.control.js";


app.post("/signup",postSignup)


app.get("/health",(req,res)=>{
    return responder(res,200,null,"health check",true);
})


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectToDB();
})

