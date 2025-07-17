const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()
const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connect to DB");
        
    } catch (error) {
        console.log("mongoDb connection error");
        console.log(error);
    }
}

module.exports = connectDb