import { SET_LOGIN, SET_LOGOUT, SET_SIGNUP, SET_SIGNOUT, TOGGLE_SIGNUP, SET_ADMIN_LOGIN, SET_ADMIN_LOGOUT } from "./authTypes"
const setLogin = () => {
    return {
        type : SET_LOGIN
    }   
}
const setLogout = () => {
    return {
       type : SET_LOGOUT
    }  
}
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
export {
    setLogin,
    setLogout,
    setSignUp,
    setSignOut,
    toggleSignup,
    setAdminLogin,
    setAdminLogout
}
