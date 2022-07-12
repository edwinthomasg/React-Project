import jwtdecode from 'jwt-decode'

const initialState = {
    profile : ''
}
const tokenState = {
    userToken : sessionStorage.getItem("usersToken"),
    _userId : '',
    userRole : '',
    message : '',
    error : ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PROFILE' : return {
            ...state,
            profile : action.payload
        }
        default : return state
    }
}
const tokenUserReducer = (state = tokenState, action) => {
    switch(action.type){
        case 'SET_USER_TOKEN' : 
        case 'SET_USER_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        return {
            ...tokenState,
            userToken : action.token,
            _userId : user.id,
            userRole : user.role,
            message : 'successfully logged in',
            error : ''
        }
        case 'SET_SIGN_UP' : return {
            ...tokenState,
            userToken : '',
            _userId : '',
            userRole : '',
            message : 'succesfully signed up',
            error : ''
        }
        case 'SET_AUTH_ERROR' : return {
            userToken : '',
            _userId : '',
            userRole : '',
            message : '',
            error : action.payload
        }
        case 'DELETE_USER_TOKEN' : sessionStorage.removeItem("usersToken")
        return {
            userToken : '',
            _userId : '',
            userRole : '',
            message : '',
            error : ''
        }
        default : return state
    }
}


export {
    userReducer,
    tokenUserReducer
}