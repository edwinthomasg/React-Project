const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const AdminSchema = new mongoose.Schema({
    adminName : {
        type : String,
        required : false
    },
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
    return jwt.sign({id:this._id, role : 'admin'},process.env.SECRET_KEY,{
        expiresIn:'20m',
    });
}

module.exports = mongoose.model('Admin',AdminSchema)