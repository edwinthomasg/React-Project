const jwt = require('jsonwebtoken')
const Admin = require('../model/Admin')
const User = require ('../model/User')
require('dotenv').config()

const isAuthenticatedUser = async (req, res, next) => {
    const { userToken }  = req.cookies;
    try{
        if (!userToken) 
        throw "You dont have access to this page , please login"
        const decodedData = jwt.verify(userToken, process.env.SECRET_KEY)
        if(req.params.userId && decodedData.id !== req.params.userId)
        throw "You dont have access to this user's account"
        req.user = await User.findById(decodedData.id)
        console.log("data: ",req.user)
        console.log("verified")
        next()
    }
    catch(err){
      return res.status(401).json({errorMessage : err})
    }
}
const isAuthenticatedAdmin = async (req, res, next) => {
    const { adminToken }  = req.cookies;
    try{
        if (!adminToken) 
        throw "You dont have access to this page , please login as admin"
        const decodedData = jwt.verify(adminToken, process.env.SECRET_KEY)
        req.user = await Admin.findById(decodedData.id)
        console.log("verified")
        next()
    }
    catch(err){
      return res.status(401).json({errorMessage : err})
    }
}

module.exports = {
  isAuthenticatedUser,
  isAuthenticatedAdmin
}


