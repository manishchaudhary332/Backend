const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/mongo-Relationship")

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }]
})


module.exports = mongoose.model("user",userSchema)