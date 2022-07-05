import jwtdecode from 'jwt-decode'

const initialState = {
    login : false,
    signup : false,
    user : true,
    adminLogin : false
}
const tokenState = {
    userToken : localStorage.getItem("usersToken"),
    userName : '',
    _userId : '',
    adminToken : localStorage.getItem("adminsToken"),
    _adminId : ''
}
// const userInitialState = {
//     userName : '',
//     userEmail : '',
//     userPassword : '',
//     userConfirmPassword : ''
// }
const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_SIGNUP' : return {
            ...state,
            signup : true
        }
        case 'SET_SIGNOUT' : return {
            ...state,
            signup : false
        }
        case 'TOGGLE_SIGNUP' : return {
            ...state,
            signup : ! state.signup
        }
        case 'SET_ADMIN_LOGIN' : return {
            ...state,
            adminLogin : true
        }
        case 'SET_ADMIN_LOGOUT' : return {
            ...state,
            adminLogin : false
        }
        default : return state
    }
}
const tokenReducer = (state = tokenState, action) => {
    switch(action.type){
        case 'SET_USER_TOKEN' : 
        case 'SET_USER_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        console.log("after refresh : ",user)
        return {
            ...tokenState,
            userToken : action.token,
            userName : user.userName,
            _userId : user.id
        }
        case 'DELETE_USER_TOKEN' : localStorage.removeItem("usersToken")
        return {
            ...tokenState,
            userToken : '',
            userName : '',
            _userId : ''
        }
        case 'SET_ADMIN_TOKEN' :
        case 'SET_ADMIN_RETRIEVE_TOKEN' : 
        const admin = jwtdecode(action.token)
        console.log("after refresh : ",admin)
        return {
            ...tokenState,
            adminToken : action.token,
            _adminId : admin.id
        }
        case 'DELETE_ADMIN_TOKEN' : localStorage.removeItem("adminsToken")
        return {
            ...tokenState,
            adminToken : '',
            _adminId : ''
        }
        default : return state
    }
}

export {
    authReducer,
    tokenReducer
}