const Movie = require('../model/Movie')
const Show = require('../model/Show')

/**Add movie to show collection */
const addMovieShow = async(movieDetails) => {
    let show
    const { _id, startBookingDate , endBookingDate} = movieDetails
    let days =  ((endBookingDate - startBookingDate) / 60000) / 1440
    for(var i=0 ;i<=Math.round(days); i++)
    {
        show = await new Show({
        showDate : new Date(startBookingDate.getTime() + 1000 * i * 86400 ),
        movieId : _id,
        seats:[{status : "available", value : false},{status : "available", value : false},{status : "available", value : false},{status : "available", value : false},{status : "available", value : false}]
    })
    await show.save()
    }
}
/**To list out all the dates for the movie selected */
const showSelectedMovie = async(req,res) => {
    const movieId = req.params.id
    try{
        if(movieId.length != 24)
        throw "Invalid Object Id"
        const showAvailableDates = await Show.find({movieId},{showDate : 1,_id : 0})
        const movie = await Movie.findById(movieId)
        if(showAvailableDates && movie)
        return res.status(200).json({showAvailableDates,movie})
    }
    catch(err){
        return res.status(400).json({errorMessage : err})
    }
    return res.status(400).json({errorMessage : "No shows sheduled for this movie"})
}
/**To book a show and update the seats */
const bookShow = async(req,res) => {
    const { showDate, movieId } = req.body
    try{
        const show = await Show.updateOne({showDate,movieId},{})
        console.log(show)
        res.status(200).json({message : "successfully updated"})
    }
    catch(err){
    console.log()
    }
}

module.exports = {
    addMovieShow,
    showSelectedMovie,
    bookShow
}