import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import CarouselContainer from '../movie/Carousel'
import { viewCurrentMovies } from '../redux/MovieActions';

 const Home = () => {
  const [toggle, setToggle] = useState('Now Showing');
  const dispatch = useDispatch()
  const current = new Date()
  const formattedDate = current.toISOString()
  const tabChange = (event, newTab) => {
    setToggle(newTab)
  }
  const displayCurrentMovies = () => {
    dispatch(viewCurrentMovies(formattedDate))
  }
    return(<>
      <CarouselContainer/>
      <ToggleButtonGroup color="primary" value={toggle} exclusive onChange={tabChange} style={{marginLeft : 600, marginTop : 80}}>
      <ToggleButton onClick={displayCurrentMovies} value="Now Showing">Now Showing</ToggleButton>
      <ToggleButton value="Upcoming Movies">Upcoming Movies</ToggleButton>
      </ToggleButtonGroup>
      
    </>)
 }

 export default Home