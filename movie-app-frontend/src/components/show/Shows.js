import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SeatDisplay from '../movie/SeatDisplay';
import { viewShow } from "../redux/ShowActions";


const Shows = () => {
  const [display, setDisplay] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { movieId } = useParams()
  const dates = useSelector(state => (state.show.shows))
  const [date, setDate] = useState('')
  const [toggle, setToggle] = useState('');
  const tabChange = (event, newTab) => {
    setToggle(newTab);
  };
  useEffect(() => {
    dispatch(viewShow(movieId))
  }, [movieId])
 
  const displaySeats = (event) => {
    setDate(event.target.value)
    setDisplay(true)
  }
  return (<>
    <Box p={10} pt={10} >
      <Grid container spacing={0.5}>
        <ToggleButtonGroup value={toggle} onChange={tabChange} exclusive style={{ marginLeft: 250, marginTop: 30 }}>
          {
          dates && dates.map((date, index) => <ToggleButton onClick={displaySeats} key={index} value={date.showDate.substring(0,10)} style={{width:200}}>{date.showDate.substring(0,10)}
          </ToggleButton>)
          }
        </ToggleButtonGroup>
        
      </Grid>
    </Box>
          {
            display && <SeatDisplay data={{selectedDate : date, selectedMovieId : movieId, movie : dates[0].movie }}></SeatDisplay>
          }
          
  </>)
}

export default Shows