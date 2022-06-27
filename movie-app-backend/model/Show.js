const { array } = require('joi')
const mongoose = require('mongoose')

const showSchema = mongoose.Schema({
    showDate : {
        type : Date,
        required : true
    },
    movieName : {
        type : String,
        required : true
    },
    seats : {
        type : [],
        require : true
    }
})