import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewShow } from "../redux/showTypes";
import Date from '../movie/Date'
const Shows = () => {
  const dispatch = useDispatch()
  const { movieId } = useParams()
  const dates = useSelector(state => (state.show.shows.showAvailableDates))

  console.log("movie id : ",movieId)
  console.log("shows date here : ",dates)

  useEffect(() => {
    dispatch(viewShow(movieId))
  },[movieId])
    return(<>
      <Box p={10} pt={10} >
      <Grid container spacing={0.5}>
        Shows Page
       {
        dates && dates.map((date,index) => <Date key={index} data={date} />)
       }
        

      </Grid>
    </Box>
    </>)
}

export default Shows