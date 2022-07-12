const Movie = require('../model/Movie')
const Show = require('../model/Show')
const { movieValidationSchema } = require('../validation/ValidationSchema')
const { addMovieShow } = require('./ShowController')
/**To view all the movies running on screen */

const viewMovies = async(req, res) => {
    let movies
    try{
        movies = await Movie.find()
        if(movies.length <= 0)
        throw "No movies have been showing"
        return res.status(200).json({movies})
    }
    catch(err) {
        return res.status(404).json({ errorMessage : err.message })
    }
}
/**To view particular movie running on screen */
const viewMovie = async(req, res) => { 
    let movie
    let movieId = req.params.movieId
        try{
            if(movieId.length !== 24)
            throw "Invalid Object Id"
            movie = await Movie.findById(movieId)
            if(movie === null)
            throw "No movie found with the id mentioned"
            return res.status(200).json({movie})
        }
        catch(err) {
            return res.status(404).json({ errorMessage : err })
        }   
}
/**To add a new movie to the dashboard */
const addMovie = async(req, res) => { 
    let movie
    try{
        let options = { abortEarly : false }
        const movieResult = await movieValidationSchema.validateAsync(req.body,options)
        movie = await Movie.findOne({ movieName : movieResult.movieName, startBookingDate : movieResult.startBookingDate })
        if(movie) 
        throw "The movie has already been added"
        movie = new Movie(movieResult)
        await movie.save()
        addMovieShow(movie)
        return res.status(201).json({message : "Succesfully movie has been added",movie})
    }
    catch(err) {
        if(err.isJoi === true)
        {
            const errors = []
            err.details.forEach(detail => {
            let error = {
                [detail.path] : detail.message
            }
            errors.push(error)
        })
        return res.status(400).json(errors)
        }
        return res.status(400).json({ errorMessage : err })
    } 
}
/**To update existing movie details */
const updateMovie = async(req, res) => {
    let movie
    let movieShow
    let show
    let movieId = req.params.movieId
    try{
        if(movieId.length !== 24)
        throw "Invalid Object Id"
        movie = await Movie.findById(movieId)
        if(movie === null)
        throw "Unable to update this movie"
        movieShow = await Movie.findById(movieId)
        let options = { abortEarly : false }
        const updateResult = await movieValidationSchema.validateAsync(req.body, options)
        movie = await Movie.findByIdAndUpdate(movieId, updateResult)
        await movie.save()
        movie = await Movie.findById(movieId)
        show = await Show.find({movie : movieId, showDate : movieShow.startBookingDate})
        for(var i=0 ;i<3; i++)
        {
        show = await Show.updateOne({movie : movieId, showDate : new Date(movieShow.startBookingDate.getTime() + (1000 * i * 86400))},
        {showDate : new Date(movie.startBookingDate.getTime() + (1000 * i * 86400))})
        }
        return res.status(200).json({message:"Successfully updated"})
    }
    catch(err) {
        return res.status(404).json({ errorMessage : err })
    }
}
/**To delete a movie from dashboard */
const deleteMovie = async(req, res) => {
    let movie
    let movieId = req.params.movieId
        try{
            if(movieId.length !== 24)
            throw "Invalid Object Id"
            movie = await Movie.findByIdAndDelete(movieId)
            if(movie === null)
            throw "Unable to delete this id"
            return res.status(200).json({ message : "Succesfully deleted" })
        }
        catch(err) {
            return res.status(404).json({ errorMessage : err })
        }  
}
module.exports = {
    viewMovies,
    viewMovie,
    addMovie,
    updateMovie,
    deleteMovie
}

