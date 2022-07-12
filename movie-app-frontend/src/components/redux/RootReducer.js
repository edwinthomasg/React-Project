import { combineReducers } from "@reduxjs/toolkit"
import { movieReducer } from "./MovieReducer"
import { tokenUserReducer, userErrorReducer, userLoginReducer, userReducer, userSuccessReducer } from "./UserReducer"
import { adminReducer, tokenAdminReducer } from "./AdminReducer"
import { signUpReducer } from "./SignUpReducer"
import { bookingReducer, seatsReducer, showsReducer } from "./ShowReducer"
import { bookReducer } from "./BookReducer"

const root = combineReducers({
    movie : movieReducer,
    user : userReducer,
    userTokener : tokenUserReducer,
    admin : adminReducer,
    adminTokener : tokenAdminReducer,
    signUp : signUpReducer,
    show : showsReducer,
    book : bookReducer,
    seat : seatsReducer,
    booking : bookingReducer
})

export default root