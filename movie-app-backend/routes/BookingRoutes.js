const express = require('express')
const { getMyBookings, viewBookings} = require('../controllers/BookController')
const bookRouter = express.Router()

bookRouter.get('/:userId/:bookDate/:movieId/:bookSeat',getMyBookings) /**To view my bookings in user side */
bookRouter.get('/bookings',viewBookings) /**To view all the bookings for a movie in admin side */
module.exports = bookRouter

