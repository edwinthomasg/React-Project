const User = require('../model/User')
const { registerValidationSchema } = require('../ValidationSchema')
const registerUser = async(req,res) => {
    let user
    console.log("req body : ",req.body)
   
    const registerResult = await registerValidationSchema.validateAsync(req.body)
    const {value,error} = registerResult
    console.log(value,error)
    
    try{
        user = new User({
            userName,
            userEmail,
            userPassword,
            userConfirmPassword,
            userContact
        })
        await user.save()
        return res.status(201).json({message : "Succesfully signed up",user})
    }
    catch(err) {
        return res.status(404).json({errorMessage : err.message})
    }
    
   
}
const loginUser = async(req,res,next) => {
    let user
    console.log("Req body : ",req.body)
    const{ userEmail, userPassword } = req.body
    try{

    }
    catch(err){
        return res.status(404).json({errorMessage : err.message})
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