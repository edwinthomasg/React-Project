const express = require('express')
const {viewMovies,viewMovie,addMovie, deleteMovie} = require('../controllers/MovieController')
const movieRouter = express.Router()
// const movie = require('../model/Movie')
movieRouter.get('/',viewMovies)
movieRouter.get('/movie/:id',viewMovie)
movieRouter.post('/addMovie',addMovie)
movieRouter.delete('/deleteMovie/:id',deleteMovie)
module.exports = movieRouter