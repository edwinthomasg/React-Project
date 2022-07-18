import { SET_ADMIN_TOKEN, SET_ADMIN_RETRIEVE_TOKEN, DELETE_ADMIN_TOKEN, SET_ADMIN_PROFILE, SET_ADMIN_LOGIN_ERROR } from "./ActionTypes"
import axios from 'axios'
import { AdminBase } from "../api/BaseUrl"
import { axiosAdminInstance } from "../api/Interceptors"
const setAdminToken = (token) => {
    return {
        type : SET_ADMIN_TOKEN,
        token : token.accessToken,
        payload : token.message
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
const setAdminProfile = (admin) => {
    return {
        type : SET_ADMIN_PROFILE,
        payload : admin
    }
}
const setAdminLoginError = (error) => {
    return {
        type : SET_ADMIN_LOGIN_ERROR,
        payload : error
    }
}

const storeAdminToken = (admin) => {
    return(dispatch) => {
        axios.post(`${AdminBase}/login`,admin)
        .then( token => {
            sessionStorage.setItem("adminsToken", token.data.accessToken)
            dispatch(setAdminToken(token.data))
        })
        .catch( error => {
            if(error.response.status === 400)
            {
                dispatch(setAdminLoginError(error.response.data.errorMessage))
            }
        })
    }
}

const retrieveAdminToken = () => {
    return(dispatch, getState) => {
        const token = getState().admin.adminToken
        if(token){
            dispatch(setAdminRetrieveToken(token))
        } 
    }
}

const viewAdminProfile = (adminId) => {
    return(dispatch) => {
        axiosAdminInstance({
            url: `admin/my-profile/${adminId}`,
            method: "get"
        })
        .then((admin) => {
            dispatch(setAdminProfile(admin.data.admin))
        })
        .catch( err => console.log(err) )
    }
}

const updateAdminProfile = (adminDetails,adminId) => {
    return (dispatch) => {
        axiosAdminInstance({
            url: `admin/${adminId}`,
            method: "put",
            data : adminDetails
        })
        .then(() => { 
            dispatch(setAdminProfile(adminDetails))
        })
        .catch( err => console.log("error : ",err))
    }
}
export {
    storeAdminToken,
    retrieveAdminToken,
    deleteAdminToken,
    viewAdminProfile,
    updateAdminProfile
}
