// import { SET_SIGNUP, SET_SIGNOUT, TOGGLE_SIGNUP, SET_USER_TOKEN, SET_USER_RETRIEVE_TOKEN, DELETE_USER_TOKEN, SET_ADMIN_TOKEN, SET_ADMIN_RETRIEVE_TOKEN, DELETE_ADMIN_TOKEN, SET_PROFILE, SET_ADMIN_PROFILE } from "./actionTypes"
// import axios from 'axios'

// const setSignUp = () => {
//     return {
//         type : SET_SIGNUP
//     }
// }
// const setSignOut = () => {
//     return {
//         type : SET_SIGNOUT
//     }
// }
// const toggleSignup = () => {
//     return {
//         type : TOGGLE_SIGNUP
//     }
// }
// const setUserToken = (token) => {
//     return {
//         type : SET_USER_TOKEN,
//         token
//     }
// }
// const setUserRetrieveToken = (token) => {
//     return {
//         type : SET_USER_RETRIEVE_TOKEN,
//         token
//     }
// }
// const deleteUserToken = () => {
//     return {
//         type : DELETE_USER_TOKEN
//     }
// }
// const setAdminToken = (token) => {
//     return {
//         type : SET_ADMIN_TOKEN,
//         token
//     }
// }
// const deleteAdminToken = () => {
//     return {
//         type : DELETE_ADMIN_TOKEN
//     }
// }
// const setAdminRetrieveToken = (token) => {
//     return {
//         type : SET_ADMIN_RETRIEVE_TOKEN,
//         token
//     }
// }
// const setProfile = (user) => {
//     return {
//         type : SET_PROFILE,
//         payload : user
//     }
// }
// const setAdminProfile = (admin) => {
//     return {
//         type : SET_ADMIN_PROFILE,
//         payload : admin
//     }
// }
// const storeUserToken = (user, type = 'login') => {
//     return(dispatch) => {
//         axios.post(`http://localhost:3040/users/${type}`,user)
//         .then( token => {
//             if(type === 'login')
//             {
//             localStorage.setItem("usersToken", token.data.accessToken)
//             dispatch(setUserToken(token.data.accessToken))
//             }
//         })
//         .catch( err => console.log(err.response.data,err.response.status))
//     }
// }
// const storeAdminToken = (admin) => {
//     return(dispatch) => {
//         axios.post(`http://localhost:3040/admin/login`,admin)
//         .then( token => {
//             localStorage.setItem("adminsToken", token.data.accessToken)
//             dispatch(setAdminToken(token.data.accessToken))
//         })
//         .catch( err => console.log(err.response.data,err.response.status))
//     }
// }
// const retrieveUserToken = () => {
//     return(dispatch, getState) => {
//         const token = getState().tokener.userToken
//         if(token){
//             dispatch(setUserRetrieveToken(token))
//         } 
//     }
// }
// const retrieveAdminToken = () => {
//     return(dispatch, getState) => {
//         const token = getState().tokener.adminToken
//         if(token){
//             dispatch(setAdminRetrieveToken(token))
//         } 
//     }
// }
// const viewProfile = (userId) => {
//     return(dispatch) => {
//         axios.get(`http://localhost:3040/users/my-profile/${userId}`)
//         .then((user) => {
//             dispatch(setProfile(user.data.user))
//         })
//         .catch( err => console.log(err) )
//     }
// }
// const viewAdminProfile = (adminId) => {
//     return(dispatch) => {
//         axios.get(`http://localhost:3040/admin/my-profile/${adminId}`)
//         .then((admin) => {
//             console.log("datas ... ",admin.data.admin)
//             dispatch(setAdminProfile(admin.data.admin))
//         })
//         .catch( err => console.log(err) )
//     }
// }
// const updateProfile = (userDetails,userId) => {
//     console.log("user details : ",userDetails)
//     console.log("id : ",userId)
//     return (dispatch) => {
//         axios.put(`http://localhost:3040/users/${userId}`,userDetails)
//         .then(() => { 
//             dispatch(setProfile(userDetails))
//         })
//         .catch( err => console.log("error : ",err))
//     }
// }
// const updateAdminProfile = (adminDetails,adminId) => {
//     console.log("admin details : ",adminDetails)
//     console.log("id : ",adminId)
//     return (dispatch) => {
//         axios.put(`http://localhost:3040/admin/${adminId}`,adminDetails)
//         .then(() => { 
//             dispatch(setAdminProfile(adminDetails))
//         })
//         .catch( err => console.log("error : ",err))
//     }
// }
// export {
//     setSignUp,
//     setSignOut,
//     toggleSignup,
//     storeUserToken,
//     retrieveUserToken,
//     deleteUserToken,
//     storeAdminToken,
//     retrieveAdminToken,
//     deleteAdminToken,
//     viewProfile,
//     updateProfile,
//     viewAdminProfile,
//     updateAdminProfile
// }
