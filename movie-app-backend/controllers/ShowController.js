const Movie = require('../model/Movie')
const Show = require('../model/Show')
const Book = require('../model/Book')
const { saveBookings } = require('./BookController')

/**Add movie to show collection */
const addMovieShow = async(movieDetails) => {
    let show
    const {  _id, startBookingDate , endBookingDate } = movieDetails
    let days =  (( endBookingDate - startBookingDate ) / 60000) / 1440
    for(var i=0 ;i<=Math.round(days); i++)
    {
        show = await new Show({
        movieId : _id,
        showDate : new Date(startBookingDate.getTime() + 1000 * i * 86400 ),
        seats:[]
    })
    await show.save()
    }
}
/**To list out all the dates for the movie selected */
const showSelectedMovie = async(req,res) => {
    const movieId = req.params.movieId
    try{
        if(movieId.length !== 24)
        throw "Invalid Object Id"
        const showAvailableDates = await Show.find({movieId},{ showDate : 1, _id : 0 })
        const movie = await Movie.findById(movieId)
        if(!(showAvailableDates && movie))
        throw "No shows sheduled for this movie"
        return res.status(200).json({showAvailableDates,movie})
    }
    catch(err){
        return res.status(400).json({errorMessage : err})
    }
}
/**To book a show and update the seats */
const bookShow = async(req,res) => {
    let show,book
    const { movieId, showDate, seats, userId } = req.body
    try{
        show = await Show.findOne( { movieId, showDate } , { seats : 1, _id : 0 })
        if(!show)
        throw "Show not available"
        const seatsArray = show.seats
        const contains = seatsArray.some(element => {
            return seats.indexOf(element) !== -1;
          });
        if(contains)
        throw "please select other seats"
        show = await Show.updateOne({ showDate, movieId },{ $push: {seats:{$each : [...seats]}} } )
        book = {
            userId,
            bookDate : showDate,
            movieId,
            bookSeat : seats
        }
        saveBookings(book)
        return res.status(200).json({message : "successfully your tickets have been confirmed"})
    }
    catch(err){
        return res.status(400).json({errorMessage : err})
    }
}

module.exports = {
    addMovieShow,
    showSelectedMovie,
    bookShow
}