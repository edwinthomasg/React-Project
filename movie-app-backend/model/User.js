const mongoose = require('mongoose')


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

module.exports = mongoose.model('User',UserSchema)