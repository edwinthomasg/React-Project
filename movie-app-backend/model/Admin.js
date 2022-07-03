const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const AdminSchema = new mongoose.Schema({
    adminEmail : {
        type : String,
        lowercase :true,
        required : true
    },
    adminPassword : {
        type : String,
        required : true
    }
})

AdminSchema.methods.generateJsonWebToken = function(){
    return jwt.sign({id:this._id},process.env.SECRET_KEY,{
        expiresIn:'5m',
    });
}

module.exports = mongoose.model('Admin',AdminSchema)