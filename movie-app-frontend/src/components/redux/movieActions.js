import { SET_MOVIES, VIEW_MOVIE } from "./movieTypes"
import axios from 'axios'

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
        axios.post('http://localhost:3040/movies',movieDetails)
        .then(movie => { 
            dispatch(setMovie(movie.data.movie))
        })
        .catch( err => console.log("error : ",err))
    }
}
const viewMovie = (movieId) => {
    return(dispatch) => {
        axios.get(`http://localhost:3040/movies/${movieId}`)
        .then(movie => {
            console.log("recieved : ",movie.data.movie)
            dispatch(setSingleMovie(movie.data.movie))
        })
        .catch( err => console.log(err) )
    }
}

export {
    addMovies,
    viewMovie
}