import { authReducer, tokenReducer } from "./authReducer"
import { combineReducers } from "@reduxjs/toolkit"
import movieReducer from "./movieReducer"

const root = combineReducers({
    auth : authReducer,
    tokener : tokenReducer,
    movie : movieReducer
})

export default root