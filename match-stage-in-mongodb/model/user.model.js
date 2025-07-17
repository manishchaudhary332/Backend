const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/match-stage")


const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const User =  mongoose.model("User",userSchema)

module.exports = User