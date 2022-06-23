const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        validate : {
            validator : function(userName){
                return userName.match(/^[a-zA-Z ]+$/)
            },
            message : `User Name should contains only alphabets`
        }
    },
    userEmail : {
        type : String,
        required : true,
        lowercase :true,
        validate : {
            validator : function(userName){
                return false
            },
            message : "returned false",
            validator : function(userName){
                return userName.match(/^([a-z]+[\.-\d]*)@([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/)
            },
            message : `Invalid email id`
        }
    },
    userPassword : {
        type : String,
        required : true
    },
    userConfirmPassword : {
        type : String,
        required : true
    },
    userContact : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('User',UserSchema)