const Movie = require('../model/Movie')
const Show = require('../model/Show')
const Book = require('../model/Book')

/**To view my bookings */
const getMyBookings = async(req,res) => {
    let booking
    const { userId, bookDate, movieId, bookSeat } = req.params
    console.log(req.params)
    try{
        booking = await Book({
            userId,
            bookDate,
            movieId,
            bookSeat
        })
        await booking.save()
        if(booking)
        return res.status(201).json({message : "Succesfully booking has been confirmed",booking})
    }
    catch(err){
        return res.status(400).json({errorMessage : err})
    }
}
/**To view all the bookings for a movie in admin side */
const viewBookings = async(req,res) => {
        let bookings
        try{
            bookings = await Book.find()
            if(bookings.length > 0)
            return res.status(200).json({bookings})
        }
        catch(err) {
            return res.status(404).json({errorMessage : err.message})
        }
        return res.status(404).json({error : "No bookings have been recorded"})
}

module.exports = {
    getMyBookings,
    viewBookings
}
    
