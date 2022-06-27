const mongoose = require('mongoose')


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

module.exports = mongoose.model('Admin',AdminSchema)