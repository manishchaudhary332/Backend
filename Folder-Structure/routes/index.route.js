const express = require('express')
const router = express()
const {homeController} = require('../controllers/index.controller')


router.get('/',homeController)

module.exports = router