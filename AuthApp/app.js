const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const connectDb = require('./config/mongoose-connection')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/authRoute')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("chal gyaaaaaaaaaaaaaaaaaa")
})

app.use('/api/auth',authRoute)

connectDb()
app.listen(process.env.PORT,()=>{
    console.log("server is running on 3000 port");
    
})
