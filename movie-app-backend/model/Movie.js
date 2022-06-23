const mongoose = require('mongoose')

const Schema = mongoose.Schema

const movieSchema = new Schema({
    movieImageUrl : {
        type : String,
        required : true,
        // validate : {
        //     validator : function(movieImageUrl) {
        //         return  movieImageUrl.match(/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/)
        //     },
        //     message : `The url specified is not a type of an image`
        // }
    },
    movieVideoUrl : {
        type : String,
        required : true,
        // validate : {
        //     validator : function(movieVideoUrl) {
        //         return  movieVideoUrl.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
        //         )
        //     },
        //     message : `Invalid youtube link`
        // }
    },
    movieName : {
        type : String,
        required : true
    },
    ticketCost : {
        type : Number,
        required : true,
        min : 190,
        max : 500
    },
    description : {
        type : String,
        required : true
    },
    actorName : {
        type : String,
        required : true,
        // validate : {
        //     validator : function(actorName){
        //         return actorName.match(/^[a-zA-Z ]+$/)
        //     },
        //     message : `Actor name should contain only alphabets`
        // }
    },
    directorName : {
        type : String,
        required : true,
        // validate : {
        //     validator : function(directorName){
        //         return directorName.match(/^[a-zA-Z ]+$/)
        //     },
        //     message : `Director name should contain only alphabets`
        // }
    },
    startBookingDate : {
        type : Date,
        required : true,
        // validate : {
        //     validator : function(startBookingDate){
        //         if(startBookingDate < Date.now())
        //          return false
        //     },
        //     message : `The date has been expired from today`

        // }
    },
    endBookingDate : {
        type : Date,
        required : true,
        // validate : {
        //     validator : function(endBookingDate){
        //         if(endBookingDate < Date.now())
        //          return false
        //     },
        //     message : `The date has been expired from today`

        // }
    }

})

module.exports = mongoose.model('movie',movieSchema)


  
  

  