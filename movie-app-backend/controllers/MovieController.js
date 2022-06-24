const Movie = require('../model/Movie')
const { validateUrl, validateName } = require('../Validation')
/**To view all the movies running on screen */
const viewMovies = async(req,res,next) => {
    let movies
    try{
        movies = await Movie.find()
        if(movies.length > 0)
        return res.status(200).json({movies})
    }
    catch(err) {
        return res.status(404).json({errorMessage : err.message})
    }
    console.log("movies : ",movies)
    return res.status(404).json({message : "No movies have been showing"})
}
/**To view particular movie running on screen */
const viewMovie = async(req,res,next) => { 
    console.log("Requested movie id : ",req.params.id)
    let movie
        try{
            if(req.params.id.length == 24)
            movie = await Movie.findById(req.params.id)
            else throw `Invalid Object Id`
            console.log("movie : ",movie)
            if(movie != null)
            return res.status(200).json({movie})
        }
        catch(err) {
            return res.status(404).json({errorMessage : err})
        } 
    return res.status(404).json({message : "No movie found with the id mentioned"})     
}
/**To add a new movie to the dashboard */
const addMovie = async(req,res,next) => { /**check date */
    let addedMovie
    console.log("req body : ",req.body)
    const { movieImageUrl, movieVideoUrl, movieName, ticketCost, description, actorName, directorName, startBookingDate, endBookingDate } = req.body

    const imgResult = validateUrl(movieImageUrl,1)
    const videoResult = validateUrl(movieVideoUrl,2)
    const actorResult = validateName(actorName,1)
    const directorResult = validateName(actorName,1)

    console.log(imgResult,videoResult,actorResult,directorResult)
    
    if(imgResult == true && videoResult == true && actorResult == true && directorResult == true)
    {
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
        return res.status(404).json({errorMessage : err.message})
    }
    }
    return res.status(404).json({message : "Unable to add movie",errors : { image : imgResult,
            video : videoResult, actor : actorResult , director : directorResult ,startDate : startDateResult, endDate : endDateResult
        }})
        
}
/**To update existing movie details */
const updateMovie = async(req,res,next) => {
    console.log("Requested movie id to update : ",req.params.id)
    const { movieImageUrl, movieVideoUrl, movieName, ticketCost, description, actorName, directorName, startBookingDate, endBookingDate } = req.body
    let movie
    try{
        if(req.params.id.length == 24)
        {
            movie = await Movie.findByIdAndUpdate(req.params.id,{
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
        }
        else throw `Invalid Object Id`
        
        if(movie != null)
        {
            movie = await movie.save()
            return res.status(200).json({message:"Successfully updated",movie})
        }
    }
    catch(err) {
        return res.status(404).json({errorMessage : err})
    }
    return res.status(404).json({message:"Unable to update this id"}) 
}
/**To delete a movie from dashboard */
const deleteMovie = async(req,res,next) => {
    console.log("Requested movie id to be deleted : ",req.params.id)
    let movie
    try{
        if(req.params.id.length == 24)
        movie = await Movie.findByIdAndDelete(req.params.id)
        else throw `Invalid Object Id`
        if(movie != null)
        return res.status(200).json({message : 'Successfully deleted',movie})
    }
    catch(err){
        return res.status(404).json({errorMessage : err})
    }
    return res.status(404).json({message:"No movie can be deleted by this id"}) 
}
module.exports = {
    viewMovies,
    viewMovie,
    addMovie,
    updateMovie,
    deleteMovie
}