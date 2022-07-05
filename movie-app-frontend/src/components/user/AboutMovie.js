import { Box, CardMedia, Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { viewMovie } from "../redux/movieActions";

const AboutMovie = () => {
    let { movieId } = useParams();
    const dispatch = useDispatch()
    const movieDetails = useSelector(state => state.movie.film)
    console.log("details : ", movieDetails)
    console.log("movieId : ", movieId)
    useEffect(() => {
        dispatch(viewMovie(movieId))
    }, [movieId])
    return (<>
        <iframe src={movieDetails.movieVideoUrl} height={200} width={300} allow='autoplay'></iframe>
        
    </>)
}

export default AboutMovie