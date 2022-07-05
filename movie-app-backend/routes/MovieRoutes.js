const express = require('express')
const { viewMovies, viewMovie, addMovie, updateMovie, deleteMovie } = require('../controllers/MovieController')
const { isAuthenticatedAdmin } = require('../middlewares/auth')
const movieRouter = express.Router()

movieRouter.get('/', viewMovies) /**To view all the movies */
movieRouter.get('/:movieId', viewMovie) /**To view particular movie */
movieRouter.post('/', addMovie) /**To add a new movie */
movieRouter.put('/:movieId', isAuthenticatedAdmin, updateMovie) /**To update a existing movie details */
movieRouter.delete('/:movieId', isAuthenticatedAdmin, deleteMovie) /**To delete a particular movie */

module.exports = movieRouter