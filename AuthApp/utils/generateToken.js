const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generateToken = (data)=>{
    return jwt.sign(data,process.env.JWT_SECRET)
}
module.exports = generateToken