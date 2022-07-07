import axios from "axios"
import { SET_SHOW } from "./actionTypes"
const setShow = (dates) => {
    return {
        type : SET_SHOW,
        payload : dates
    }
}

const viewShow = (movieId) => {
    return(dispatch) => {
        axios.get(`http://localhost:3040/shows/${movieId}`)
        .then((show) => {
            console.log("shows sheduled : ",show.data)
            dispatch(setShow(show.data))
        })
        .catch((err) => console.log(err))
    }
}

export {
    viewShow
}