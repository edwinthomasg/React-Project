const User = require('../model/User')

const loginUser = async(req,res) => {
    let loginUser
    console.log("req body : ",req.body)
    const{userName,userEmail,userPassword,userContact} = req.body
    try{
        loginUser = new User({
            userName,
            userEmail,
            userPassword,
            userContact
        })
        await loginUser.save()
        return res.status(201).json({message : "Succesfully logged in",loginUser})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
    
    return res.status(500).json({message : "Unable to login user"})
        
}
const viewProfile = async(req,res,next) => {
    let user
    console.log("Requested Profile Id : ",req.params.id)
    try{
        user = await User.findById(req.params.id)
        return res.status(200).json({user})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
    console.log("user : ",user)
    return res.status(404).json({message : "No users found"})
}
const updateProfile = async(req,res) => {
    console.log("Requested id to update : ",req.params.id)
    const{userName,userEmail,userPassword,userContact} = req.body
    let user
    try{
        user = await User.findByIdAndUpdate(req.params.id,{
            userName,
            userEmail,
            userPassword,
            userContact
        })
        user = await user.save()
        return res.status(201).json({message:"Successfully updated",user})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
    return res.status(404).json({message:"Unable to update this id"}) 
}
module.exports = {
    loginUser,
    viewProfile,
    updateProfile
}