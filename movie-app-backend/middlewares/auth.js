const jwt = require('jsonwebtoken')
const Admin = require('../model/Admin')
const User = require ('../model/User')
require('dotenv').config()

const isAuthenticatedUser = async (req, res, next) => {
  console.log("is user authenticate ...")
    const { userToken }  = req.cookies;
    console.log("user token",userToken)
    try{
        if (!userToken) 
        throw "You dont have access to this page , please login"
        const decodedData = jwt.verify(userToken, process.env.SECRET_KEY)
        if(req.params.userId && decodedData.id !== req.params.userId)
        throw "You dont have access to this user's account"
        req.user = await User.findById(decodedData.id)
        console.log("verified")
        next()
    }
    catch(err){
      return res.status(401).json({errorMessage : err})
    }
}
const isAuthenticatedAdmin = async (req, res, next) => {
  console.log("is admin authenticate ...")
    const { adminToken }  = req.cookies;
    console.log("admin token",adminToken)
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


