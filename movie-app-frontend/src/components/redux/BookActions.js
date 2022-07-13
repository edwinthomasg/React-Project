import axios from "axios"
import { BookBase } from "../api/BaseUrl"
import { axiosUserInstance } from "../api/Interceptors"
import { SET_BOOK, SET_BOOKINGS } from "./ActionTypes"
import { axiosAdminInstance } from "../api/Interceptors"

const setBook = (book) => {
    return {
        type : SET_BOOK,
        payload : book
    }
}
const setBookings = (bookings) =>  {
    return {
    type : SET_BOOKINGS,
    payload : bookings
    }
}
const viewBook = (userId) => {
    return(dispatch) => {
        axiosUserInstance({
            url: `bookings/${userId}`,
            method: "get"
        })
        .then(book => {
            dispatch(setBook(book.data.bookings))
        })
    }
}
const viewAllBookings = () => {
    return(dispatch) => {
        axiosAdminInstance({
            url: `bookings`,
            method: "get"
        })
        .then( bookings => {
            console.log("book : ",bookings)
            dispatch(setBookings(bookings.data.bookings))
        })
        .catch((err) => console.log("err : ",err))
    }
}


export {
    viewBook,
    viewAllBookings
}