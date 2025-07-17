const express = require('express')
const router = express()
const {userController} = require("../controllers/user.controller")

router.get('/',userController)

module.exports = router