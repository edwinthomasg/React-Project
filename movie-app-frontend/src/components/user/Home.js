import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'

import CarouselContainer from '../movie/Carousel'

 const Home = () => {
  const [toggle, setToggle] = useState('Now Showing');
  const tabChange = (event, newTab) => {
    setToggle(newTab);
  };
    return(<>
      <CarouselContainer/>
      <ToggleButtonGroup color="primary" value={toggle} exclusive onChange={tabChange} style={{marginLeft : 600, marginTop : 80}}>
      <ToggleButton value="Now Showing">Now Showing</ToggleButton>
      <ToggleButton value="Upcoming Movies">Upcoming Movies</ToggleButton>
      </ToggleButtonGroup>
      
    </>)
 }

 export default Home