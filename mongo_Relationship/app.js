const express = require('express')
const app = express()
const userModel = require("./model/user.model")
const porstModel = require('./model/post.model')
const postModel = require('./model/post.model')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/create', async(req,res)=>{
    const {name,email,password} = req.body;
    const user =await userModel.create({
        name,
        email,
        password,
    })
    res.send(user)
})
app.post('/:name/create/post',async(req,res)=>{
 
    const user =await userModel.findOne({name:req.params.name})
  const createdPost =  await postModel.create({
        contant:"this is fucker",
        user:user._id
    })
    user.posts.push(createdPost._id)
    await user.save()
    res.send({user,createdPost})
})

app.listen(3000,()=>{
    console.log("running");
    
})