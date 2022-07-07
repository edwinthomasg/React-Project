const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Book = require('./Book')
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
    },
    myBookings : {
        type : [mongoose.Types.ObjectId],
        ref : 'Book',
        required : false
    }
})

UserSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{
        expiresIn:'10m',
    });
}

module.exports = mongoose.model('User',UserSchema)
