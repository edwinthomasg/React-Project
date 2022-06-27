const mongoose = require('mongoose')
const Movie = require('./Movie')
const showSchema = mongoose.Schema({
    showDate : {
        type : Date,
        required : true
    },
    movieId : {
        type : mongoose.Types.ObjectId,
        ref : 'Movie',
        required : true
    },
    seats : {
        type : [],
        require : true
    }
})

module.exports = mongoose.model('Show',showSchema)