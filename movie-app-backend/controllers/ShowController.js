const Movie = require('../model/Movie')
const Show = require('../model/Show')
const Book = require('../model/Book')
const { saveBookings } = require('./BookController')

/**Add movie to show collection */
const addMovieShow = async(movieDetails) => {
    let show
    const {  _id, startBookingDate , endBookingDate } = movieDetails
    let days =  (( endBookingDate - startBookingDate ) / 60000) / 1440
    console.log("days : ",days)
    for(var i=0 ;i<=Math.round(days); i++)
    {
        show = await new Show({
        movie : _id,
        showDate : new Date(startBookingDate.getTime() + (1000 * i * 86400) ),
        seats:[]
    })
    await show.save()
    }
}
/**To list out all the dates for the movie selected */
const showSelectedMovie = async(req,res) => {
    const movieId = req.params.movieId
    console.log("movieId : ",movieId)
    try{
        if(movieId.length !== 24)
        throw "Invalid Object Id"
        const showAvailableDates = await Show.find({movie : movieId},{showDate : 1, _id : 0}).populate({path : 'movie'})
        console.log("show details : ",showAvailableDates)
        const movie = await Movie.findById(movieId)
        if(!(showAvailableDates && movie))
        throw "No shows sheduled for this movie"
        return res.status(200).json({showAvailableDates})
    }
    catch(err){
        return res.status(400).json({errorMessage : err})
    }
}
/**To book a show and update the seats */
const bookShow = async(req,res) => {
    let show,book
    const { movieId, showDate, seats, userId } = req.body
    console.log("req : ",req.body)
    try{
        show = await Show.findOne( { movie : movieId, showDate } , { seats : 1, _id : 0 })
        if(!show)
        throw "Show not available"
        const seatsArray = show.seats
        const contains = seatsArray.some(element => {
            return seats.indexOf(element) !== -1;
          });
        if(contains)
        {
            console.log("invalid")
            throw "please select other seats"}
        show = await Show.updateOne({ showDate, movie : movieId },{ $push: {seats:{$each : [...seats]}} } )
        show = await Show.find({ showDate, movie : movieId }).populate({ path: 'movie'})
        book = {
            user : userId,
            bookDate : showDate,
            movie : movieId,
            bookSeat : seats
        }
        saveBookings(book)

        return res.status(200).json({message : "successfully your tickets have been confirmed", show})
    }
    catch(err){
        console.log("message : ",err)
        return res.status(400).json({errorMessage : err})
    }
}

module.exports = {
    addMovieShow,
    showSelectedMovie,
    bookShow
}