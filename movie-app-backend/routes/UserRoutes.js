const express = require('express')
const {registerUser, loginUser, viewProfile, updateProfile, deleteProfile} = require('../controllers/UserController')
const userRouter = express.Router()
userRouter.get('/',(req,res) => res.send("User Dashboard"))
userRouter.post('/signUp',registerUser) /**To register user*/
userRouter.post('/login',loginUser) /**To login with email and password */
userRouter.get('/:id',viewProfile) /**To view user profile */
userRouter.put('/update/:id',updateProfile) /**To update details in existing profile */
userRouter.delete('/delete/:id',deleteProfile) /**To delete a particular profile */
module.exports = userRouter