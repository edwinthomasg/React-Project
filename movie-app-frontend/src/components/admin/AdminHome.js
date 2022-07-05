import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Movie from './Movie'
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
      AdminHome Page
      <Box p={20} pt={15} minHeight="100vh">
      <Grid container spacing={5}>
      {
        movies.map( movie => <Movie key={movie._id} data={movie}></Movie>)
      }
      </Grid>
      </Box>
    
    </>)
 }

 export default AdminHome