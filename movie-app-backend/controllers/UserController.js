const Joi = require('joi')
const User = require('../model/User')
const { registerValidationSchema, loginValidationSchema } = require('../ValidationSchema')
const registerUser = async(req,res) => {
    let user
    try{
        let options = {abortEarly : false}
        const registerResult = await registerValidationSchema.validateAsync(req.body,options)
        user = await User.findOne({userEmail : registerResult.userEmail})
        if(user) 
           throw "This mail id has already been registered"
        user = new User(registerResult)
        await user.save()
        return res.status(201).json({message : "Succesfully signed up",user})
    }
    catch(err) {
        if(err.isJoi === true)
        {
            const errors = []
            err.details.forEach(detail => {
            let error = {
                [detail.path] : detail.message
            }
            errors.push(error)
        })
        return res.status(400).json(errors)
        }
        return res.status(400).json({errorMessage : err})
    } 
}
const loginUser = async(req,res,next) => {
    let user
    try{
        let options = {abortEarly : false}
        const loginResult = await loginValidationSchema.validateAsync(req.body,options)
        user = await User.findOne({userEmail : loginResult.userEmail})
        if(user == null) 
           throw "No account exists with this email id"
        if(! (user.userPassword === loginResult.userPassword))
            throw "Password doesn't match"
        return res.status(201).json({message : "Succesfully logged in",user})
    }
    catch(err){
        return res.status(404).json({errorMessage : err})
    }
}
const viewProfile = async(req,res,next) => {
    let user
    console.log("Requested Profile Id : ",req.params.id)
    try{
        user = await User.findById(req.params.id)
        return res.status(200).json({user})
    }
    catch(err) {
        return res.status(404).json({errorMessage : err.message})
    }
    console.log("user : ",user)
    return res.status(404).json({message : "No users found"})
}
const updateProfile = async(req,res) => {
    console.log("Requested id to update : ",req.params.id)
    const{ userName, userEmail, userPassword, userConfirmPassword, userContact } = req.body
    let user
    try{
        user = await User.findByIdAndUpdate(req.params.id,{
            userName,
            userEmail,
            userPassword,
            userConfirmPassword,
            userContact
        })
        user = await user.save()
        return res.status(200).json({message:"Successfully updated",user})
    }
    catch(err) {
        return res.status(404).json({errorMessage : err.message})
    }
    return res.status(404).json({message:"Unable to update this id"}) 
}
const deleteProfile = async(req,res) => {
    console.log("Requested user id delete")
    let user
    try{
        user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({message:"Successfully deleted",user})
    }
    catch(err){
        return res.status(404).json({errorMessage : err.message})
    }
    return res.status(404).json({message:"Unable to delete this id"}) 
}
module.exports = {
    registerUser,
    loginUser,
    viewProfile,
    updateProfile,
    deleteProfile
}