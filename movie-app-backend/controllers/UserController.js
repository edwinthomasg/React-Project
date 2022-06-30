const bcrypt = require('bcrypt')
const User = require('../model/User')
const { userValidationSchema, loginValidationSchema } = require('../validation/ValidationSchema')
const sendToken = require('../utils/jwtToken')
require('dotenv').config()

/**To register an user */
const registerUser = async(req, res) => {
    let user
    try{
        
        let options = { abortEarly : false }
        console.log(req.body)
        const registerResult = await userValidationSchema.validateAsync(req.body, options)
        const { userName, userEmail, userPassword, userContact } = registerResult
        console.log(registerResult)
        user = await User.findOne({ userEmail : registerResult.userEmail })
        console.log(user)
        if(user) 
           throw "This mail id has already been registered"
        const hashedPassword = await bcrypt.hash(userPassword, 10)  
        console.log(hashedPassword) 
        user = new User({
            userName,
            userEmail,
            userPassword : hashedPassword,
            userContact
        })
        await user.save()
        console.log(user)
        const message = "Succesfully signed up"
        sendToken(user, 201, res, message)
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
        return res.status(400).json({ errorMessage : err })
    } 
}
/**To login as a user */
const loginUser = async(req, res) => {
    let user
    console.log(req.body)
    try{
        let options = { abortEarly : false }
        const loginResult = await loginValidationSchema.validateAsync(req.body,options)
        user = await User.findOne({ userEmail : loginResult.userEmail })
        if(user == null) 
           throw "No account exists with this email id"
        if(! (bcrypt.compareSync(loginResult.userPassword, user.userPassword)))
            throw "Password doesn't match"
        const message = "Succesfully logged in"
        sendToken(user, 200, res, message);    
    }
    catch(err){
        return res.status(404).json({ errorMessage : err })
    }
}
/**To view my profile */
const viewProfile = async(req, res) => {
    let user
    let userId = req.params.userId
        try{
            if(userId.length == 24)
            user = await User.findById(userId)
            else throw `Invalid Object Id`
            if(user != null)
            return res.status(200).json({user})
        }
        catch(err) {
            return res.status(404).json({ errorMessage : err })
        } 
    return res.status(404).json({message : "No user found with the id mentioned"}) 
}
/**To update my existing profile details */
const updateProfile = async(req, res) => {
    
    let user
    let userId = req.params.userId
    try{
        if(userId.length == 24)
        user = await User.findById(userId)
        else throw `Invalid Object Id`
        console.log(user)
        if(user != null)
        {
        let options = {abortEarly : false}
        const updateResult = await userValidationSchema.validateAsync(req.body,options)
        const { userName, userEmail, userPassword, userContact } = updateResult
        const hashedPassword = await bcrypt.hash(userPassword,15) 
        user = await User.findByIdAndUpdate(userId,{
            userName,
            userEmail,
            userPassword : hashedPassword,
            userContact
        })
        await user.save()
        return res.status(200).json({message:"Successfully updated"})
        }
    }
    catch(err) {
        return res.status(404).json({errorMessage : err})
    }
    return res.status(404).json({error : "Unable to update this profile"})
}
/**To deactivate my profile */
const deleteProfile = async(req,res) => {
    let user
    let userId = req.params.userId
        try{
            if(userId.length == 24)
            user = await User.findByIdAndDelete(userId)
            else throw `Invalid Object Id`
            if(user != null)
            return res.status(200).json({ message : "Succesfully deleted" })
        }
        catch(err) {
            return res.status(404).json({ errorMessage : err })
        } 
    return res.status(404).json({error : "Unable to delete this id"}) 
}
module.exports = {
    registerUser,
    loginUser,
    viewProfile,
    updateProfile,
    deleteProfile
}