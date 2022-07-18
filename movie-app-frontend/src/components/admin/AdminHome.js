import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../movie/MovieCard'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { clearMovieError, viewMovies } from '../redux/MovieActions'


const AdminHome = () => {
  const movies = useSelector( state => state.movie.movies )
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(viewMovies())
    }, [])
    return(<>
      <Box p={15} pt={15} >
      <Grid container spacing={5}>
      {
        movies.map( movie => <MovieCard key={movie._id} data={movie}></MovieCard>)
      }
      </Grid>
      </Box>
    
    </>)
 }

 export default AdminHome
