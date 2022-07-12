import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useStyles } from '../../styles/styles'
import { useDispatch } from 'react-redux'
import { addMovies } from '../redux/MovieActions'
import { useNavigate } from 'react-router-dom'

 const AdminMovies = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [ movieDetails, setMovieDetails ] = useState({
    movieImageUrl : '', 
    movieVideoUrl : '', 
    movieName : '', 
    ticketCost : '', 
    description : '',
    actorName : '',
    directorName : '',
    startBookingDate : new Date(''),
    endBookingDate : new Date('')
  })
  const detailsHandler = (event) => {
    setMovieDetails({
      ...movieDetails,
      [event.target.name] : event.target.value
    })
  }
  const submitHandler = (event) => {
    event.preventDefault()
    dispatch(addMovies(movieDetails))
    navigate('/admin/home')
  }
    return(<>
      <form  onSubmit={submitHandler}>
        <Box className = {classes.loginForm}>
          <Typography padding={1} variant='h4' textAlign="center">
           Add Movie
          </Typography>
          <TextField type={'text'} name='movieImageUrl' value={movieDetails.movieImageUrl} onChange={detailsHandler} placeholder='Image Url' margin='normal' required/>
          <TextField type={'text'} name='movieVideoUrl' value={movieDetails.movieVideoUrl} onChange={detailsHandler} placeholder='Video Url' margin='normal' required/>
          <TextField type={'text'} name='movieName' value={movieDetails.movieName} onChange={detailsHandler} placeholder='Movie Name' margin='normal' required/>
          <TextField type={'number'} name='ticketCost' value={movieDetails.ticketCost} onChange={detailsHandler} placeholder='Ticket Cost' margin='normal' required/>
          <TextField type={'text'} name='description' value={movieDetails.description} onChange={detailsHandler} placeholder='Description' margin='normal' required/>
          <TextField type={'text'} name='actorName' value={movieDetails.actorName} onChange={detailsHandler} placeholder='Actor Name' margin='normal' required/>
          <TextField type={'text'} name='directorName' value={movieDetails.directorName} onChange={detailsHandler} placeholder='Director Name' margin='normal' required/>
          <TextField type={'date'} name='startBookingDate' value={movieDetails.startBookingDate} onChange={detailsHandler}  margin='normal' required/>
          <TextField type={'date'} name='endBookingDate' value={movieDetails.endBookingDate} onChange={detailsHandler} margin='normal' required/>
          
          <Button type='submit' variant='contained' color='warning' style={{margin : '5% 0'}}>Add</Button>
        </Box>
      </form>
    </>)
 }

 export default AdminMovies