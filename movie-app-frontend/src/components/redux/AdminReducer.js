import jwtdecode from 'jwt-decode'

const initialState = {
    adminProfile : ''
}
const tokenAdminState = {
    adminToken : sessionStorage.getItem("adminsToken"),
    _adminId : '',
    adminRole : ''
}

const adminReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ADMIN_PROFILE' : return {
            ...state,
            adminProfile : action.payload
        }
        default : return state
    }
}
const tokenAdminReducer = (state = tokenAdminState, action) => {
    switch(action.type){
        case 'SET_ADMIN_TOKEN' :
        case 'SET_ADMIN_RETRIEVE_TOKEN' : 
        const admin = jwtdecode(action.token)
        return {
            ...tokenAdminState,
            adminToken : action.token,
            _adminId : admin.id,
            adminRole : admin.role
        }
        case 'DELETE_ADMIN_TOKEN' : sessionStorage.removeItem("adminsToken")
        return {
            adminToken : '',
            _adminId : '',
            adminRole : ''
        }
        default : return state
    }
}

export {
    adminReducer,
    tokenAdminReducer
}