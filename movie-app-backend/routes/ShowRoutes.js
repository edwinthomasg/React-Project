const express = require('express')
const { showSelectedMovie, bookShow } = require('../controllers/ShowController')
const showRouter = express.Router()

showRouter.get('/:id',showSelectedMovie)
showRouter.post('/book',bookShow)
module.exports = showRouter

/** shows/ */
