import { SET_ADMIN_TOKEN, SET_ADMIN_RETRIEVE_TOKEN, DELETE_ADMIN_TOKEN, SET_ADMIN_PROFILE } from "./actionTypes"
import axios from 'axios'

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
    console.log("store admin token : ",admin)
    return(dispatch) => {
        axios.post(`http://localhost:3040/admin/login`,admin)
        .then( token => {
            localStorage.setItem("adminsToken", token.data.accessToken)
            dispatch(setAdminToken(token.data.accessToken))
        })
        .catch( err => console.log(err.response.data,err.response.status))
    }
}

const retrieveAdminToken = () => {
    
    return(dispatch, getState) => {
        const token = getState().adminTokener.adminToken
        console.log("retrieve admin token : ")
        if(token){
            dispatch(setAdminRetrieveToken(token))
        } 
    }
}

const viewAdminProfile = (adminId) => {
    return(dispatch) => {
        axios.get(`http://localhost:3040/admin/my-profile/${adminId}`)
        .then((admin) => {
            console.log("datas ... ",admin.data.admin)
            dispatch(setAdminProfile(admin.data.admin))
        })
        .catch( err => console.log(err) )
    }
}

const updateAdminProfile = (adminDetails,adminId) => {
    console.log("admin details : ",adminDetails)
    console.log("id : ",adminId)
    return (dispatch) => {
        axios.put(`http://localhost:3040/admin/${adminId}`,adminDetails)
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
