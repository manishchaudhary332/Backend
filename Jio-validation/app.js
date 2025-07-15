const express = require('express')
const app  = express();
const {userModel,validitionModel} = require('./models/user.models')



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("chal rha he ")
})

app.post('/create', async(req,res)=>{
    const {name,email,password,age,contact} = req.body
   let error =  validitionModel({name,email,password,age,contact})
    if(error) return res.status(500).send(error.message)
    res.send("everthing ek working")
})

app.listen(3000,()=>{
    console.log("server is running ");
    
})