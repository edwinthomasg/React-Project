import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewAllBookings } from '../redux/BookActions'
import AdminBookCard from './AdminBookCard'

 const AdminBookings = () => {
  const dispatch = useDispatch()
  const bookings = useSelector( state => state.book.allBookings )
  console.log("bookigs : ",bookings)
   useEffect(() => {
    dispatch(viewAllBookings())
   },[])
    return(<>
      <Box p={15} pt={15} >
          <Grid container spacing={5}>
          { bookings && bookings.map( bookings => <AdminBookCard key={bookings._id} data={bookings}></AdminBookCard>)}
          </Grid>
      </Box>
    </>)
 }

 export default AdminBookings