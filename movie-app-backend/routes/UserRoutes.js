const express = require('express')
const {loginUser,viewProfile,updateProfile} = require('../controllers/UserController')
const userRouter = express.Router()
userRouter.get('/',(req,res) => res.send("User Dashboard"))
userRouter.get('/profile/:id',viewProfile)
userRouter.post('/login',loginUser)
userRouter.put('/profile/update/:id',updateProfile)
module.exports = userRouter