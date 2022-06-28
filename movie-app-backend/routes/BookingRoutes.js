const express = require('express')
const { viewBookings, saveBookings } = require('../controllers/BookController')
const bookRouter = express.Router()

bookRouter.post('/', saveBookings) /**To view my bookings in user side */
bookRouter.get('/bookings', viewBookings) /**To view all the bookings for a movie in admin side */
module.exports = bookRouter

