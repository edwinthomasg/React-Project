import { createStore } from "@reduxjs/toolkit"
import authReducer from "./components/redux/authReducer"

export const store = createStore(authReducer)


