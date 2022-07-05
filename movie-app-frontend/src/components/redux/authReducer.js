import jwtdecode from 'jwt-decode'

const initialState = {
    login : false,
    signup : false,
    user : true,
    adminLogin : false
}
const tokenState = {
    token : localStorage.getItem("usersToken"),
    userName : '',
    userEmail : '',
    userPassword : '',
    userConfirmPassword : '',
    userContact : '',
    _id : ''
}
const userInitialState = {
    userName : '',
    userEmail : '',
    userPassword : '',
    userConfirmPassword : ''
}
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
        case 'SET_TOKEN' : 
        case 'SET_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        console.log("after refresh : ",user)
        return {
            ...tokenState,
            token : action.token,
            userName : user.userName,
            userEmail : user.userEmail,
            userPassword : user.userPassword,
            userConfirmPassword : user.userConfirmPassword,
            userContact : user.userContact,
            _id : user.id
        }
        case 'DELETE_USER_ID' : return {
            state
        }
        default : return state
    }
}

export {
    authReducer,
    tokenReducer
}