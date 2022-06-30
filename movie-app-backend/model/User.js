const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true,
        lowercase :true
    },
    userPassword : {
        type : String,
        required : true
    },
    userContact : {
        type : String,
        required : true
    }
})

UserSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{
        expiresIn:'5m',
    });
}



module.exports = mongoose.model('User',UserSchema)
