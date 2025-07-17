const jwt = require('jsonwebtoken')
const userModel = require("../models/user-model")
const dotenv = require('dotenv')
dotenv.config()

module.exports.protact = async (req,res,next)=>{
    if(req.cookies.token){
        try {
            const data = jwt.verify(req.cookies.token,process.env.JWT_SECRET)

            let user = await userModel.findOne({email:data.email}).select("-password")
            req.user = user
            next();
        } catch (error) {
            res.status(401).send("User Not Authorized")
        }
    }
    if(! req.cookies.token){
        res.status(401).send("User Not Authorized, You Don't permission to access")
    }
}