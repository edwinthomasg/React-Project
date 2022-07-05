import { SET_SIGNUP, SET_SIGNOUT, TOGGLE_SIGNUP, SET_ADMIN_LOGIN, SET_ADMIN_LOGOUT, SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_ADMIN_TOKEN, SET_ADMIN_RETRIEVE_TOKEN, DELETE_ADMIN_TOKEN } from "./authTypes"
import axios from 'axios'

const setSignUp = () => {
    return {
        type : SET_SIGNUP
    }
}
const setSignOut = () => {
    return {
        type : SET_SIGNOUT
    }
}
const toggleSignup = () => {
    return {
        type : TOGGLE_SIGNUP
    }
}
const setAdminLogin = () => {
    return {
        type : SET_ADMIN_LOGIN
    }
} 
const setAdminLogout = () => {
    return {
        type : SET_ADMIN_LOGOUT
    }
} 
const setUserToken = (token) => {
    return {
        type : SET_USER_TOKEN,
        token
    }
}
const setUserRetrieveToken = (token) => {
    return {
        type : SET_USER_RETRIEVE_TOKEN,
        token
    }
}
const deleteUserToken = () => {
    return {
        type : DELETE_USER_TOKEN
    }
}
const setAdminToken = (token) => {
    return {
        type : SET_ADMIN_TOKEN,
        token
    }
}
const deleteAdminToken = () => {
    return {
        type : DELETE_ADMIN_TOKEN
    }
}
const setAdminRetrieveToken = (token) => {
    return {
        type : SET_ADMIN_RETRIEVE_TOKEN,
        token
    }
}
const storeUserToken = (user, type = 'login') => {
    return(dispatch) => {
        axios.post(`http://localhost:3040/users/${type}`,user)
        .then( token => {
            if(type === 'login')
            {
            localStorage.setItem("usersToken", token.data.accessToken)
            dispatch(setUserToken(token.data.accessToken))
            }
        })
        .catch( err => console.log(err.response.data,err.response.status))
    }
}
const storeAdminToken = (admin) => {
    return(dispatch) => {
        axios.post(`http://localhost:3040/admin/login`,admin)
        .then( token => {
            localStorage.setItem("adminsToken", token.data.accessToken)
            dispatch(setAdminToken(token.data.accessToken))
        })
        .catch( err => console.log(err.response.data,err.response.status))
    }
}
const retrieveUserToken = () => {
    return(dispatch, getState) => {
        const token = getState().tokener.userToken
        if(token){
            dispatch(setUserRetrieveToken(token))
        } 
    }
}
const retrieveAdminToken = () => {
    return(dispatch, getState) => {
        const token = getState().tokener.adminToken
        if(token){
            dispatch(setAdminRetrieveToken(token))
        } 
    }
}
export {
    setSignUp,
    setSignOut,
    toggleSignup,
    setAdminLogin,
    setAdminLogout,
    storeUserToken,
    retrieveUserToken,
    deleteUserToken,
    storeAdminToken,
    retrieveAdminToken,
    deleteAdminToken
}
