const express = require('express')
const app = express()
const userModel = require('./model/user.model')
const postModel = require('./model/post.model')

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/create', async(req,res)=>{
    const {name,email,age} = req.body;
    const user =await userModel.create({
        name,
        age,
        email,
      
    })
    res.send(user)
})

app.post('/:name/create/post', async(req,res)=>{

    const user = await  userModel.findOne({name:req.params.name})
    const createPost = await postModel.create({
        title:"my third",
        content:"oojiuhuhs",
        author:user._id,
    })
    await user.save()
    res.send(createPost)
})

app.get('/testmatch',async(req,res)=>{
    const user = await userModel.aggregate([{$match:{name:"yash"}}])
    res.send(user)
})

app.get('/testgroup',async(req,res)=>{
    const user = await userModel.aggregate([{
        $group:
        {
           _id:"$age",
           userdata:{
            $push:"$$ROOT"
           }
        }}])
    res.send(user)
})

app.listen(3000,()=>{
    console.log("server is running");
    
})