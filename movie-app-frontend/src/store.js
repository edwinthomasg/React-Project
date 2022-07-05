import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import reduxThunk from "redux-thunk"
import root from "./components/redux/rootReducer"


export const store = createStore(root,applyMiddleware(reduxThunk))


