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
import { postLogin, postSignup } from "./controllers/auth.control.js";
import { ganarateRoadmap } from "./controllers/roadmapControl.js";

// middleware
import verifyToken from "./middleware/verifyJWT.js";


app.post("/signup", postSignup);
app.post("/login",postLogin);
app.post("/ganarate",verifyToken,ganarateRoadmap);


app.get("/health", (req, res) => {
    console.log(req.session)
    return responder(res, 200, null, "health check", true);
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
    connectToDB();
})

