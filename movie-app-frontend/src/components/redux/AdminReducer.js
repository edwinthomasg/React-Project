import jwtdecode from 'jwt-decode'

const adminInitialState = {
    adminToken : sessionStorage.getItem("adminsToken"),
    _adminId : '',
    adminRole : '',
    adminProfile : '',
    message : ''
}
// const tokenAdminState = {
//     adminToken : sessionStorage.getItem("adminsToken"),
//     _adminId : '',
//     adminRole : '',
//     message : ''
// }

const adminReducer = (state = adminInitialState, action) => {
    switch(action.type){
        case 'SET_ADMIN_TOKEN' :
        case 'SET_ADMIN_RETRIEVE_TOKEN' : 
        const admin = jwtdecode(action.token)
        return {
            ...state,
            adminToken : action.token,
            _adminId : admin.id,
            adminRole : admin.role,
            message : 'logged in'
        }
        case 'DELETE_ADMIN_TOKEN' : sessionStorage.removeItem("adminsToken")
        return {
            adminToken : '',
            _adminId : '',
            adminRole : '',
            adminProfile : '',
            message : 'logged out'
        }
        case 'SET_ADMIN_PROFILE' : return {
            ...state,
            adminProfile : action.payload,
            message : 'profile loaded'
        }
        default : return state
    }
}
// const tokenAdminReducer = (state = tokenAdminState, action) => {
//     switch(action.type){
//         case 'SET_ADMIN_TOKEN' :
//         case 'SET_ADMIN_RETRIEVE_TOKEN' : 
//         const admin = jwtdecode(action.token)
//         return {
//             ...tokenAdminState,
//             adminToken : action.token,
//             _adminId : admin.id,
//             adminRole : admin.role,
//             message : 'Admin Successfully logged in'

//         }
//         case 'DELETE_ADMIN_TOKEN' : sessionStorage.removeItem("adminsToken")
//         return {
//             adminToken : '',
//             _adminId : '',
//             adminRole : '',
//             message : 'Admin logged out'
//         }
//         default : return state
//     }
// }

export {
    adminReducer
}