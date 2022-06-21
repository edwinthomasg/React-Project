const Movie = require('../model/Movie')

const viewMovies = async(req,res,next) => {
    let movies
    try{
        movies = await Movie.find()
        return res.status(200).json({movies})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
    console.log("movies : ",movies)
    return res.status(404).json({message : "No movies found"})
}
const viewMovie = async(req,res,next) => {
    console.log("Requested movie id : ",req.params.id)
    let movie
    try{
        movie = await Movie.findById(req.params.id)
        return res.status(200).json({movie})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
    console.log("movie : ",movie)
    
    return res.status(404).json({message : "No movie found"}) /*** */      
}
const addMovie = async(req,res,next) => {
    let addedMovie
    console.log("req body : ",req.body)
    const { movieImageUrl, movieVideoUrl, movieName, ticketCost, description, actorName, directorName, startBookingDate, endBookingDate } = req.body
    try { /**spacing and method comments */
        addedMovie = new Movie({
            movieImageUrl,
            movieVideoUrl,
            movieName,
            ticketCost,
            description,
            actorName,
            directorName,
            startBookingDate,
            endBookingDate
        })
        await addedMovie.save()
        return res.status(201).json({message : "Succesfully added",addedMovie})
    }
    catch(err) {
        console.log("Error Found : ",err.message)
    }
        return res.status(500).json({message : "Unable to add movie"})
        
}
const deleteMovie = async(req,res,next) => {
    console.log("Requested movie id to be deleted")
    let movie = await Movie.findById(req.params.id)
    try{
        await Movie.findByIdAndDelete(req.params.id)
        return res.status(200).json({message : 'Successfully deleted',movie})
    }
    catch(err){
        console.log("Error Found : ",err.message)
    }
}
module.exports = {
    viewMovies,
    viewMovie,
    addMovie,
    deleteMovie
}