import express from "express";
import { config } from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors"

config();

const app = express();
const PORT = 3000 || process.env.PORT;

// middlewares

app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// express-session middleware..
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    }
}))


// db conn function 
import connectToDB from "./config/connectDB.js";
import responder from "./utils/responder.js";


// controllers
import { postSignup } from "./controllers/auth.control.js";



app.post("/signup", postSignup)


app.get("/health", (req, res) => {
    return responder(res, 200, null, "health check", true);
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectToDB();
})

