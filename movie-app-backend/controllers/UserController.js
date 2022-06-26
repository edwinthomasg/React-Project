const Joi = require('joi')
const User = require('../model/User')
const { userValidationSchema, loginValidationSchema } = require('../ValidationSchema')

/**To register an user */
const registerUser = async(req,res) => {
    let user
    try{
        let options = {abortEarly : false}
        const registerResult = await userValidationSchema.validateAsync(req.body,options)
        const { userName, userEmail, userPassword, userContact } = registerResult
        user = await User.findOne({userEmail : registerResult.userEmail})
        if(user) 
           throw "This mail id has already been registered"   
        user = new User({
            userName,
            userEmail,
            userPassword,
            userContact
        })
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
/**To login as a user */
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
/**To view my profile */
const viewProfile = async(req,res,next) => {
    let user
        try{
            if(req.params.id.length == 24)
            user = await User.findById(req.params.id)
            else throw `Invalid Object Id`
            if(user != null)
            return res.status(200).json({user})
        }
        catch(err) {
            return res.status(404).json({errorMessage : err})
        } 
    return res.status(404).json({message : "No user found with the id mentioned"}) 
}
/**To update my existing profile details */
const updateProfile = async(req,res) => {
    let user
    try{
        if(req.params.id.length == 24)
        user = await User.findById(req.params.id)
        else throw `Invalid Object Id`
        if(user != null)
        {
        let options = {abortEarly : false}
        const updateResult = await userValidationSchema.validateAsync(req.body,options)
        const { userName, userEmail, userPassword, userContact } = updateResult
        user = await User.findByIdAndUpdate(req.params.id,{
            userName,
            userEmail,
            userPassword,
            userContact
        })
        await user.save()
         res.status(200).json({message:"Successfully updated"})
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
        try{
            if(req.params.id.length == 24)
            user = await User.findByIdAndDelete(req.params.id)
            else throw `Invalid Object Id`
            if(user != null)
            return res.status(200).json({message : "Succesfully deleted"})
        }
        catch(err) {
            return res.status(404).json({errorMessage : err})
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