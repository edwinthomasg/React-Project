import { SET_MOVIES, VIEW_MOVIE, DELETE_MOVIE } from "./ActionTypes"
import axios from 'axios'
import { MovieBase } from "../api/BaseUrl"
import { axiosAdminInstance } from "../api/Interceptors"

const setMovie = (movies) => {
    return {
        type : SET_MOVIES,
        payload : movies
    }
}
const setSingleMovie = (movie) => {
    return {
        type : VIEW_MOVIE,
        payload : movie
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
            dispatch(setMovie(movie.data.movie))
        })
        .catch( err => console.log("error : ",err))
    }
}
const viewMovie = (movieId) => {
    return(dispatch) => {
        axios.get(`${MovieBase}/${movieId}`)
        .then(movie => {
            dispatch(setSingleMovie(movie.data.movie))
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
    viewMovie,
    deleteMovie,
    updateMovie
}