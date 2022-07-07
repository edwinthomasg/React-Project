import { SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_PROFILE } from "./actionTypes"
import axios from "axios"

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
const storeUserToken = (user, type = 'login') => {
    console.log("store user token : ",user)
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
const retrieveUserToken = () => {
    
    return(dispatch, getState) => {
        const token = getState().userTokener.userToken
        console.log("retrive user token : ",token)
        if(token){
            dispatch(setUserRetrieveToken(token))
        } 
    }
}
const viewProfile = (userId) => {
    return(dispatch) => {
        axios.get(`http://localhost:3040/users/my-profile/${userId}`)
        .then((user) => {
            dispatch(setProfile(user.data.user))
        })
        .catch( err => console.log(err) )
    }
}
const updateProfile = (userDetails,userId) => {
    console.log("user details : ",userDetails)
    console.log("id : ",userId)
    return (dispatch) => {
        axios.put(`http://localhost:3040/users/${userId}`,userDetails)
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