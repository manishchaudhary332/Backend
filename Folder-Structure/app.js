const express = require("express")
const app = express();
const indexRoute = require('./routes/index.route')
const userRoute = require('./routes/user.route')


app.use('/',indexRoute)
app.use('/user',userRoute)



app.listen(process.env.PORT ||3000)