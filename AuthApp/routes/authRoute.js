const express = require('express')
const router = express()
const {registerUser, loginUser, logoutUser, profileUser} = require('../controllers/auth.controller')
const {protact} = require('../middlewares/protect')

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/logout',logoutUser)
router.get('/profile',protact,profileUser)


module.exports = router