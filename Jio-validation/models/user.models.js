const mongoose = require('mongoose')
const jio = require('joi')
const Joi = require('joi')

mongoose.connect('mongodb://localhost:27017/joiTestdb')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3

    },
    email:{
        type:String,
        required:true,
        minLength:5
    },
    password:{
        type:String,
        required:true,
        minLength:3
    },
    age:{
        type:Number,
        required:true,
        minLength:18
    },
    contact:{
        type:Number,
        required:true,
        minLength:5
    },
})

const validitionModel = (data)=>{
  let schema =  jio.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(3).required(),
  age: Joi.number().min(18).required(),
  contact: Joi.string().min(5).required()
   })
  let {error} =  schema.validate(data)
  return error;
  
}

const userModel = mongoose.model("user",userSchema)

module.exports = {userModel,validitionModel}