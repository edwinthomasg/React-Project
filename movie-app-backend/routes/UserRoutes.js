const express = require('express')
const {registerUser, loginUser, viewProfile, updateProfile, deleteProfile} = require('../controllers/UserController')
const isAuthenticatedUser = require('../auth')
const userRouter = express.Router()
userRouter.get('/',(req,res) => res.send("User Dashboard"))
userRouter.post('/signUp',registerUser) /**To register user*/
userRouter.post('/login',loginUser) /**To login with email and password */
userRouter.get('/:id',isAuthenticatedUser,viewProfile) /**To view user profile */
userRouter.put('/update/:id',isAuthenticatedUser,updateProfile) /**To update details in existing profile */
userRouter.delete('/delete/:id',isAuthenticatedUser,deleteProfile) /**To delete a particular profile */
module.exports = userRouter