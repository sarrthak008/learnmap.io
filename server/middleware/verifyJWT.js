import jwt from "jsonwebtoken";
import responder from "../utils/responder.js";


const veriJWTToken = (token) => {
    try {
        let decodedData = jwt.verify(token, process.env.JWT_SECRET);
        return decodedData;
    } catch (error) {
        return ('JWT verification faild..');
    }
}


const verifyToken = (req, res, next) => {
    try {

        let { token } = req.session;
        if (!token) {
            // try to get token form body --session hostiong problem 
            let { localToken } = req.body;
        
            if (!localToken) {  //-- not localStorage token -- give the error
                return responder(res, 501, null, "WTF both tokens not found ", false);
            }
            let decodedData = veriJWTToken(localToken);
            req.user = decodedData;
            next()
        } else {
            let decodedData = veriJWTToken(token);
            req.user = decodedData;
            next()
        }
    } catch (error) {
        return responder(res, error.status || 500, null, error.message, false);
    }
}

export default verifyToken;