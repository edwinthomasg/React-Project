import jwtdecode from 'jwt-decode'

const initialState = {
    adminProfile : ''
}
const tokenAdminState = {
    adminToken : localStorage.getItem("adminsToken"),
    _adminId : ''
}

const adminReducer = (state = initialState, action) => {
    console.log(" admin type : ",action.type)
    switch(action.type){
        case 'SET_ADMIN_PROFILE' : return {
            ...state,
            adminProfile : action.payload
        }
        default : return state
    }
}
const tokenAdminReducer = (state = tokenAdminState, action) => {
    console.log("admin type : ",action.type)
    switch(action.type){
        case 'SET_ADMIN_TOKEN' :
        case 'SET_ADMIN_RETRIEVE_TOKEN' : 
        const admin = jwtdecode(action.token)
        return {
            ...tokenAdminState,
            adminToken : action.token,
            _adminId : admin.id
        }
        case 'DELETE_ADMIN_TOKEN' : localStorage.removeItem("adminsToken")
        return {
            adminToken : '',
            _adminId : ''
        }
        default : return state
    }
}

export {
    adminReducer,
    tokenAdminReducer
}