import axios from "axios"
import { axiosUserInstance } from "../api/Interceptors"
import { SET_BOOKING, SET_BOOKINGS, CLEAR_BOOKING } from "./ActionTypes"
import { axiosAdminInstance } from "../api/Interceptors"

const setBooking = (booking) => {
    return {
        type : SET_BOOKING,
        payload : booking
    }
}
const setBookings = (bookings) =>  {
    return {
    type : SET_BOOKINGS,
    payload : bookings
    }
}
const clearBooking = () => {
    return {
        type : CLEAR_BOOKING,
    }
}
const viewBooking = (userId) => {
    return(dispatch) => {
        axiosUserInstance({
            url: `bookings/${userId}`,
            method: "get"
        })
        .then(book => {
            console.log("user book : ",book.data.bookings)
            dispatch(setBooking(book.data.bookings))
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
    viewBooking,
    viewAllBookings,
    clearBooking
}