import jwtdecode from 'jwt-decode'

const initialState = {
    profile : ''
}
const tokenState = {
    userToken : localStorage.getItem("usersToken"),
    _userId : ''
}

const userReducer = (state = initialState, action) => {
    console.log(" auth type : ",action.type)
    switch(action.type){
        case 'SET_PROFILE' : return {
            ...state,
            profile : action.payload
        }
        default : return state
    }
}
const tokenUserReducer = (state = tokenState, action) => {
    console.log("token user type : ",action.type)
    switch(action.type){
        case 'SET_USER_TOKEN' : 
        case 'SET_USER_RETRIEVE_TOKEN' :
        const user = jwtdecode(action.token)
        return {
            ...tokenState,
            userToken : action.token,
            _userId : user.id
        }
        case 'DELETE_USER_TOKEN' : localStorage.removeItem("usersToken")
        return {
            userToken : '',
            _userId : ''
        }
        default : return state
    }
}


export {
    userReducer,
    tokenUserReducer
}