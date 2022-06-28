const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require ('./model/User')


const isAuthenticatedUser = async (req, res, next) => {
    const token  = req.cookies;
    console.log(req.cookies)
    console.log("token",token)
    try{
        if (!token) 
        throw "You dont have access to this page , please login"
        console.log("process token : ",process.env.SECRET_KEY)
        const decodedData = jwt.verify(token, process.env.SECRET_KEY)
        console.log("decode result : ",decodedData)
        req.user = await User.findById(decodedData.id)
        next()
    }
    catch(err){
      return res.status(401).json({errorMessage : err})
    }
}

module.exports = isAuthenticatedUser


