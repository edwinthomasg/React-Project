import { Box, Button, SnackbarContent, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { viewMovie } from "../redux/MovieActions";

const AboutMovie = () => {
    let { movieId } = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movie.movie)
    const { movieName, description, actorName, directorName, startBookingDate, ticketCost } = movieDetails
    useEffect(() => {
        dispatch(viewMovie(movieId))
    }, [movieId])
    return (<>
        <Box sx={{
            width: 400,
            height: 370,
            margin: 'auto',
            marginTop:'90px'
        }}>
            <iframe src={movieDetails.movieVideoUrl} width='395px'  style={{marginBottom : '10px'}} allow='autoplay'></iframe>
            <Stack spacing={1} sx={{ maxWidth: 600 }}>
            <SnackbarContent message={movieName} action="Movie Name" />
            <SnackbarContent message={actorName} action="Actor Name"/>
            <SnackbarContent message={directorName} action="Director Name" />
            <SnackbarContent message={description} action="Description" />
            <SnackbarContent message={startBookingDate} action="Release Date" />
            <SnackbarContent message={ticketCost} action="Ticket Cost" />
            </Stack>
          
        </Box>
    </>)
}

export default AboutMovie