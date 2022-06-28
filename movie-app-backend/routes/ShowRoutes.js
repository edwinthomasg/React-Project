const express = require('express')
const { showSelectedMovie, bookShow } = require('../controllers/ShowController')
const isAuthenticatedUser = require('../auth')
const showRouter = express.Router()

showRouter.get('/:id',showSelectedMovie) /**To list all the dates available for the movie mentioned */
showRouter.post('/book',isAuthenticatedUser,bookShow) /**To book a movie show in user side */
module.exports = showRouter

