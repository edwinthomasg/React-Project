const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    movieImageUrl : {
        type : String,
        required : true
    },
    movieVideoUrl : {
        type : String,
        required : true
    },
    movieName : {
        type : String,
        required : true
    },
    ticketCost : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    actorName : {
        type : String,
        required : true
    },
    directorName : {
        type : String,
        required : true
    },
    startBookingDate : {
        type : Date,
        required : true
    },
    endBookingDate : {
        type : Date,
        required : true
    }

})

module.exports = mongoose.model('movie',movieSchema)