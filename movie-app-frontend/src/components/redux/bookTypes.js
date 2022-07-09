import axios from "axios"
import { SET_BOOK } from "./actionTypes"
const setBook = (book) => {
    return {
        type : SET_BOOK,
        payload : book
    }
}

const viewBook = (userId) => {
    return(dispatch) => {
        console.log("userid to find : ",userId)
        axios.get(`http://localhost:3040/bookings/${userId}`)
        .then(book => {
            console.log("bookings : ",book.data.bookings)
            dispatch(setBook(book.data.bookings))
        })
    }
}

export {
    viewBook
}