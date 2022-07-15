import jwtdecode from 'jwt-decode'

const userInitialState = {
    userToken : sessionStorage.getItem("usersToken"),
    _userId : '',
    userRole : '',
    message : '',
    loginSuccess : '',
    loginFailed : '',
    profile : ''
}


const userReducer = (state = userInitialState, action) => {
    switch(action.type){
        case 'SET_USER_TOKEN' : 
        case 'SET_USER_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        return {
            ...state,
            userToken : action.token,
            _userId : user.id,
            userRole : user.role,
            message : 'logged in',
            profile : user,
            error : ''
        }
        case 'SET_SIGN_UP' : return {
            ...state,
            userToken : '',
            _userId : '',
            userRole : '',
            message : 'signed up',
            error : ''
        }
        case 'SET_AUTH_ERROR' : return {
            userToken : '',
            _userId : '',
            userRole : '',
            message : '',
            profile : '',
            error : action.payload
        }
        case 'DELETE_USER_TOKEN' : sessionStorage.removeItem("usersToken")
        return {
            userToken : '',
            _userId : '',
            userRole : '',
            message : '',
            profile : '',
            error : ''
        }
        case 'SET_PROFILE' : return {
            ...state,
            profile : action.payload
        }
        case 'SET_USER_REFRESH' : return {
            ...state,
            profile : ''
        }
        default : return state
    }
}

export {
    userReducer
}