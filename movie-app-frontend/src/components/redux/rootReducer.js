// import { authReducer, tokenAdminReducer, tokenReducer } from "./authReducer"
import { combineReducers } from "@reduxjs/toolkit"
import { movieReducer } from "./movieReducer"
import { tokenUserReducer, userReducer } from "./userReducer"
import { adminReducer, tokenAdminReducer } from "./adminReducer"
import { signUpReducer } from "./signUpReducer"
import { showsReducer } from "./showReducer"

const root = combineReducers({
    movie : movieReducer,
    user : userReducer,
    userTokener : tokenUserReducer,
    admin : adminReducer,
    adminTokener : tokenAdminReducer,
    signUp : signUpReducer,
    show : showsReducer
})

export default root