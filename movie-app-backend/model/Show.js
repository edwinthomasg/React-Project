const mongoose = require('mongoose')

const showSchema = mongoose.Schema({
    showDate : {
        type : Date,
        required : true
    }
})