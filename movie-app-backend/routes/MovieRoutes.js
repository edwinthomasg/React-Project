const express = require('express')
const {viewMovies, viewMovie, addMovie, updateMovie, deleteMovie} = require('../controllers/MovieController')
const isAuthenticatedUser = require('../auth')
const movieRouter = express.Router()

movieRouter.get('/',viewMovies) /**To view all the movies */
movieRouter.get('/:id',viewMovie) /**To view particular movie */
movieRouter.post('/addMovie',addMovie) /**To add a new movie */
movieRouter.put('/updateMovie/:id',updateMovie) /**To update a existing movie details */
movieRouter.delete('/deleteMovie/:id',deleteMovie) /**To delete a particular movie */

module.exports = movieRouter