import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewBook } from '../redux/bookTypes'

 const Bookings = () => {
    const userId = useSelector( state => state.userTokener._userId )
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewBook(userId))
    })
    return(<>
      Bookings Page
    </>)
 }

 export default Bookings