// import { authReducer, tokenAdminReducer, tokenReducer } from "./authReducer"
import { combineReducers } from "@reduxjs/toolkit"
import { movieReducer } from "./movieReducer"
import { tokenUserReducer, userErrorReducer, userReducer } from "./userReducer"
import { adminReducer, tokenAdminReducer } from "./adminReducer"
import { signUpReducer } from "./signUpReducer"
import { showsReducer } from "./showReducer"
import { bookReducer } from "./bookReducer"

const root = combineReducers({
    movie : movieReducer,
    user : userReducer,
    userTokener : tokenUserReducer,
    admin : adminReducer,
    adminTokener : tokenAdminReducer,
    signUp : signUpReducer,
    show : showsReducer,
    userError : userErrorReducer,
    book : bookReducer
})

export default root