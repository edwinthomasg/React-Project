import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box } from '@mui/system'
import MovieDisplay from './MovieDisplay'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    axios.get('http://localhost:3040/movies')
      .then(movies => {
        setMovies(movies.data.movies)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getMovies()
  }, [])
  return (<>
    Movies Page
    <Box p={20} pt={15} minHeight="100vh">
      <Grid container spacing={5}>
        {
          movies.map(movie => <MovieDisplay key={movie._id} data={movie}></MovieDisplay>)
        }
      </Grid>
    </Box>
  </>)
}

export default Movies