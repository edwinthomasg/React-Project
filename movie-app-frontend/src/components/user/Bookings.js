import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearBooking, viewBooking } from '../redux/BookActions'
import BookCard from './BookCards'

 const Bookings = () => {
    const userId = useSelector( state => state.user._userId )
    const bookings = useSelector( state => state.book.bookings )
    const { bookingSuccess, bookingMessage } = useSelector( state => state.book )
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewBooking(userId))
      if(bookings)
      dispatch(clearBooking())
    },[userId])
    return(<>
    {
      !bookingSuccess && bookingMessage && <h1>No Bookings have been recorded</h1>
    }
    <Box p={15} pt={15} >
      <Grid container spacing={5}>
        {
          bookings && bookings.map( book => <BookCard key={book._id} data={book}></BookCard>) 
        }
      </Grid>
    </Box>
      
    </>)
 }

 export default Bookings