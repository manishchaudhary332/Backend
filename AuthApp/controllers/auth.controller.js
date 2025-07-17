const userModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')


module.exports.registerUser =async (req,res)=>{
    const {name,email,password} = req.body;
    try {
        
    // user allready exixt
    const user =await userModel.findOne({email})
    if(user){
        return res.status(400).send("User allready exixt please login")
    }

    let salt  = await bcrypt.genSalt()
    let hash = await bcrypt.hash(password,salt)
    const createuser =await userModel.create({
        name,
        email,
        password:hash,
    })
    
   const token =  generateToken({email})
   res.cookie("token",token,{
    httpOnly:true,
    secure:true,
    maxAge: 30 * 24 * 60 * 60 * 1000,
   })

   res.status(201).send(createuser)
    } catch (error) {
        res.status(500).send(error.message)
        
    }
}


module.exports.loginUser =async (req,res)=>{
    const {email,password} = req.body; 
    try {
        let user =await userModel.findOne({email})
        if(!user){
            return res.status(500).send("Email or Password Incorrect")
        }

        let result =  bcrypt.compare(password, user.password)

        if(result){
            let token  = generateToken({email})
            res.cookie("token",token,{
                httpOnly:true,
                secure:true,
                maxAge:30*24*60*60*1000,
            })

            res.status(201).send("user Login Successfully")
        }else{
            return res.status(500).send("Email or Password Incorrect")
        }

    } catch (error) {
      res.status(500).send(error)
    }
}


module.exports.logoutUser =async (req,res)=>{
    res.cookie("token","",{
                httpOnly:true,
                secure:true,
               
            })

            res.status(201).send("user LogOut Successfully")
}

module.exports.profileUser =async (req,res)=>{
    res.send(" maa  chod diye bhiya G apne to ")
}