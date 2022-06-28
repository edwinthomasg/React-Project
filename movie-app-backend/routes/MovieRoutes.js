const express = require('express')
const { viewMovies, viewMovie, addMovie, updateMovie, deleteMovie } = require('../controllers/MovieController')
const isAuthenticatedUser = require('../middlewares/auth')
const movieRouter = express.Router()

movieRouter.get('/', isAuthenticatedUser, viewMovies) /**To view all the movies */
movieRouter.get('/:movieId', isAuthenticatedUser, viewMovie) /**To view particular movie */
movieRouter.post('/', addMovie) /**To add a new movie */
movieRouter.put('/:movieId', updateMovie) /**To update a existing movie details */
movieRouter.delete('/:movieId', deleteMovie) /**To delete a particular movie */

module.exports = movieRouter