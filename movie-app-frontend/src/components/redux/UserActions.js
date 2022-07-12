import { SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_PROFILE, SET_AUTH_ERROR, SET_SIGN_UP } from "./ActionTypes"
import axios from "axios"
import { UserBase } from "../api/BaseUrl"
import { axiosUserInstance } from "../api/Interceptors"

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
const setProfile = (user) => {
    return {
        type : SET_PROFILE,
        payload : user
    }
}
const setAuthError = (error) => {
    return {
        type : SET_AUTH_ERROR,
        payload : error
    }
}
const setSignUp = () => {
    return {
        type : SET_SIGN_UP
    }
}
const storeUserToken = (user, type = 'login') => {
    console.log("entering actions...")
    return (dispatch) => {
        axios.post(`${UserBase}/${type}`,user)
        .then( token => {
            if(type === 'login')
            {
            console.log("login action ..")
            sessionStorage.setItem("usersToken", token.data.accessToken)
            dispatch(setUserToken(token.data.accessToken))
            console.log("stored login success message in state")
            }
            else
            {
                console.log("signup action ..")
                dispatch(setSignUp())
                console.log("stored signup success message in state")

            }
        })
        .catch( err => {
            if(err.response.status === 400)
            {
                console.log("message received from backend : ",err.response.data.errorMessage)
                dispatch(setAuthError(err.response.data.errorMessage))
                console.log("stored error in state using dispatch")
            }
        })
    }
}
const retrieveUserToken = () => {
    
    return(dispatch, getState) => {
        const token = getState().userTokener.userToken
        if(token){
            dispatch(setUserRetrieveToken(token))
        } 
    }
}
const viewProfile = (userId) => {
    return(dispatch) => {
        axiosUserInstance({
            url: `users/my-profile/${userId}`,
            method: "get"
        })
        .then((user) => {
            dispatch(setProfile(user.data.user))
        })
        .catch( err => console.log(err) )
    }
}
const updateProfile = (userDetails,userId) => {
    return (dispatch) => {
        axiosUserInstance({
            url: `users/${userId}`,
            method: "put",
            data : userDetails
        })
        .then(() => { 
            dispatch(setProfile(userDetails))
        })
        .catch( err => console.log("error : ",err))
    }
}

export {
    storeUserToken,
    retrieveUserToken,
    deleteUserToken,
    viewProfile,
    updateProfile
}