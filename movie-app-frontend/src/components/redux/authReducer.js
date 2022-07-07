// import jwtdecode from 'jwt-decode'

// const initialState = {
//     signup : false,
//     profile : '',
//     adminProfile : ''
// }
// const tokenState = {
//     userToken : localStorage.getItem("usersToken"),
//     _userId : ''
// }
// const tokenAdminState = {
//     adminToken : localStorage.getItem("adminsToken"),
//     _adminId : ''
// }

// const authReducer = (state = initialState, action) => {
//     console.log(" auth type : ",action.type)
//     switch(action.type){
//         case 'SET_SIGNUP' : return {
//             ...state,
//             signup : true
//         }
//         case 'SET_SIGNOUT' : return {
//             ...state,
//             signup : false
//         }
//         case 'TOGGLE_SIGNUP' : return {
//             ...state,
//             signup : ! state.signup
//         }
//         case 'SET_PROFILE' : return {
//             ...state,
//             profile : action.payload
//         }
//         case 'SET_ADMIN_PROFILE' : return {
//             ...state,
//             adminProfile : action.payload
//         }
//         default : return state
//     }
// }
// const tokenReducer = (state = tokenState, action) => {
//     console.log("token user type : ",action.type)
//     switch(action.type){
//         case 'SET_USER_TOKEN' : 
//         case 'SET_USER_RETRIEVE_TOKEN' :
//         const user = jwtdecode(action.token)
//         return {
//             ...tokenState,
//             userToken : action.token,
//             _userId : user.id
//         }
//         case 'DELETE_USER_TOKEN' : localStorage.removeItem("usersToken")
//         return {
//             userToken : '',
//             _userId : ''
//         }
//         default : return state
//     }
// }
// const tokenAdminReducer = (state = tokenAdminState, action) => {
//     console.log("admin type : ",action.type)
//     switch(action.type){
//         case 'SET_ADMIN_TOKEN' :
//         case 'SET_ADMIN_RETRIEVE_TOKEN' : 
//         const admin = jwtdecode(action.token)
//         return {
//             ...tokenAdminState,
//             adminToken : action.token,
//             _adminId : admin.id
//         }
//         case 'DELETE_ADMIN_TOKEN' : localStorage.removeItem("adminsToken")
//         return {
//             adminToken : '',
//             _adminId : ''
//         }
//         default : return state
//     }
// }

// export {
//     authReducer,
//     tokenReducer,
//     tokenAdminReducer
// }