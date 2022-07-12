import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewBook } from '../redux/BookActions'
import BookCard from './BookCards'

 const Bookings = () => {
    const userId = useSelector( state => state.userTokener._userId )
    const bookings = useSelector( state => state.book.bookings )
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewBook(userId))
    },[userId])
    return(<>
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