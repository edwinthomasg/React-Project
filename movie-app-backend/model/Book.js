const mongoose = require('mongoose')
const User = require('./User')
const Movie = require('./Movie')

const BookSchema = new mongoose.Schema({
    userId: { 
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : true
    },
    bookDate : {
        type : Date,
        required : true
    },
    movieId : {
        type : mongoose.Types.ObjectId,
        ref : 'Movie',
        required : true
    },
    bookSeat : {
        type : [],
        required : true
    }
})

module.exports = mongoose.model('Book',BookSchema)