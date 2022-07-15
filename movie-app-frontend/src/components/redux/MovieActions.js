import { SET_MOVIES, SET_MOVIE, DELETE_MOVIE } from "./ActionTypes"
import axios from 'axios'
import { MovieBase } from "../api/BaseUrl"
import { axiosAdminInstance } from "../api/Interceptors"

const setMovies = (movies) => {
    return {
        type : SET_MOVIES,
        payload : movies
    }
}
const setMovie = (movie) => {
    return {
        type : SET_MOVIE,
        payload : movie
    }
}
const setCurrentMovies = (movies) => {
    return {
        type : 'SET_CURRENT_MOVIES',
        payload : movies
    }
}
const viewMovies = () => {
    return(dispatch) => {
        axios.get(`${MovieBase}`)
        .then(movies => {
            console.log("movies : ",movies.data.movies)
            dispatch(setMovies(movies.data.movies))
        })
        .catch( err => console.log(err) )
    }
}
const viewCurrentMovies = (currentDate) => {
    return(dispatch) => {
        axios.get(`${MovieBase}/today/?current=${currentDate}`)
        .then(movies => {
            console.log("Current Movies : ",movies.data)
        })
        .catch( err => {
            console.log("error : ",err)
        })
    }
}
const addMovies = (movieDetails) => {
    return (dispatch) => {
        axiosAdminInstance({
            url: `movies`,
            method: "post",
            data:movieDetails
        })
        .then(movie => { 
            console.log("movie added : ",movie.data.movie)
            // dispatch(setMovie(movie.data.movie))
        })
        .catch( err => console.log("error : ",err))
    }
}
const viewMovie = (movieId) => {
    return(dispatch) => {
        axios.get(`${MovieBase}/${movieId}`)
        .then(movie => {
            dispatch(setMovie(movie.data.movie))
        })
        .catch( err => console.log(err) )
    }
}
const deleteMovie = (movieId) => {
    return() => {
        axiosAdminInstance({
            url: `movies/${movieId}`,
            method: "delete"
        })
        .then((message) => console.log(message) )
        .catch( (err) => console.log(err))
    }
}
const updateMovie = (movieDetails,movieId) => {
    return(dispatch) => {
        axiosAdminInstance({
            url: `movies/${movieId}`,
            method: "put",
            data:movieDetails
        })
        .then(() => {
            dispatch(setMovie(movieDetails))
        })
        .catch( err => console.log(err))
    }
}
export {
    addMovies,
    viewMovies,
    viewMovie,
    viewCurrentMovies,
    deleteMovie,
    updateMovie
}