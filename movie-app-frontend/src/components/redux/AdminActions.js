import { SET_ADMIN_TOKEN, SET_ADMIN_RETRIEVE_TOKEN, DELETE_ADMIN_TOKEN, SET_ADMIN_PROFILE } from "./ActionTypes"
import axios from 'axios'
import { AdminBase } from "../api/BaseUrl"
import { axiosAdminInstance } from "../api/Interceptors"
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
const setAdminProfile = (admin) => {
    return {
        type : SET_ADMIN_PROFILE,
        payload : admin
    }
}

const storeAdminToken = (admin) => {
    return(dispatch) => {
        axios.post(`${AdminBase}/login`,admin)
        .then( token => {
            sessionStorage.setItem("adminsToken", token.data.accessToken)
            dispatch(setAdminToken(token.data.accessToken))
        })
        .catch( err => console.log(err.response.data,err.response.status))
    }
}

const retrieveAdminToken = () => {
    
    return(dispatch, getState) => {
        const token = getState().adminTokener.adminToken
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
