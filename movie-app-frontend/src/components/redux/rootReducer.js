import { authReducer, tokenReducer } from "./authReducer"
import { combineReducers } from "@reduxjs/toolkit"

const root = combineReducers({
    auth : authReducer,
    tokener : tokenReducer
})

export default root