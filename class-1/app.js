const express =  require('express')
const app = express();
const connectDB = require('./src/db/db')
const UserSchema = require('./src/model/user.model')



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send("manish chaudhary")
})

app.post("/register", async(req,res)=>{
    const {username,email,password} = req.body;
    const user =await UserSchema.create({
        username,
        email,password
    })
    res.send(user)
})
app.get("/read", async(req,res)=>{
   
    const user =await UserSchema.find()
    res.send(user)
})

app.post("/read/:username", async(req,res)=>{
   const {username,email} = req.body;
    const user =await UserSchema.findOne({username:req.params.username})
    res.send(user)
})
app.post("/update/:username", async(req,res)=>{
   const {username,email} = req.body;
    const user =await UserSchema.findOneAndUpdate({username:req.params.username},{username,email})
    res.send(user)
})
app.post("/delete/:username", async(req,res)=>{
    const user =await UserSchema.findOneAndDelete({username:req.params.username})
    res.send(user)
})

// app.post('/register', async (req,res)=>{
//     const {username,email,password} = req.body 
//    const user = await UserSchema.create({
//         username,
//         email,
//         password,
//     })
//     res.send(user)
//     console.log(user);
    
// })
// app.get('/read', async(req,res)=>{
//     const {name,email} = req.query
//     const user2 = await UserSchema.findOne({name})
//     res.send(user2)
//     console.log("read");
    
// })
// app.get('/dalo/:username', async(req,res)=>{
//     const user2 = await UserSchema.findOne({username:req.params.username})
//     res.send(user2)
//     console.log("read");
    
// })

// app.post('/update/:username', async(req,res)=>{
//      const {username,email} = req.body 
//     const user2 = await UserSchema.findOneAndUpdate({username:req.params.username},{username,email})
//     res.send(user2)
//     console.log("updated");
    
// })

// app.get('/delete/:username', async(req,res)=>{
//     const user2 = await UserSchema.findOneAndDelete({username:req.params.username})
//     res.send(user2)
//     console.log("delete");
    
   
// })



app.listen(3000,()=>{
    connectDB()
    console.log("server is running");
    
})