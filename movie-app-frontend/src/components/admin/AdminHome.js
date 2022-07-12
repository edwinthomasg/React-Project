import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../movie/MovieCard'
import { Box } from '@mui/system'


const AdminHome = () => {
    const [ movies, setMovies ] = useState([])
    const getMovies = () => {
      axios.get('http://localhost:3040/movies')
      .then( movies => {
        setMovies(movies.data.movies)
    } )
      .catch( err => console.log(err) )
    }
    useEffect(() => {
      getMovies()
    },[movies])
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
