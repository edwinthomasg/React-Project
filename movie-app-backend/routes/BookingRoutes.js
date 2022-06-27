const express = require('express')
const { getBookedDetails, viewBookings} = require('../controllers/BookController')
const bookRouter = express.Router()

bookRouter.post('/movie',getBookedDetails)
bookRouter.get('/bookings',viewBookings)
module.exports = bookRouter