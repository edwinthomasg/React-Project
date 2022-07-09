import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { viewShow } from "../redux/showTypes";

const Shows = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { movieId } = useParams()
  const dates = useSelector(state => (state.show.shows.showAvailableDates))
  const [toggle, setToggle] = useState('');
  const tabChange = (event, newTab) => {
    setToggle(newTab);
  };
  useEffect(() => {
    dispatch(viewShow(movieId))
  }, [movieId])
  const displaySeats = () => {
    
  }
  return (<>
    <Box p={10} pt={10} >
      <Grid container spacing={0.5}>
        Shows Page
        <ToggleButtonGroup value={toggle} onChange={tabChange} exclusive style={{ marginLeft: 300, marginTop: 50 }}>
          {
          dates && dates.map((date, index) => <ToggleButton onClick={displaySeats} key={index} value={date.showDate.substring(0,10)} style={{width:200}}>{date.showDate.substring(0,10)}
          </ToggleButton>)
          }
        </ToggleButtonGroup>
      </Grid>
    </Box>
          
  </>)
}

export default Shows