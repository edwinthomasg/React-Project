const showInitialState = {
    shows : '',
    seats : '',
    book : '',
    message : ''
}
// const seatsInitialState = {
//     seats : ''
// }
// const bookInitialState = {
//     book : '',
//     message : ''
// }

const showsReducer = (state = showInitialState, action) => {
    switch(action.type){
        case 'SET_SHOW' : return {
            ...state,
            shows : action.payload
        }
        case 'SET_SEATS' : return {
            ...state,
            seats : action.payload
        }
        case 'SET_BOOKING_STATUS' : return {
            ...state,
            book : action.payload
        }
        case 'SET_SEAT_ERROR' : return {
            ...state,
            book : '',
            message : action.payload
        }
        default : return state
    }
}
// const seatsReducer = (state = seatsInitialState, action) => {
//     switch(action.type){
//         case 'SET_SEATS' : return {
//             ...seatsInitialState,
//             seats : action.payload
//         }
//         default : return state
//     }
// }
// const bookingReducer = (state = bookInitialState, action) => {
//     switch(action.type){
//         case 'SET_BOOKING_STATUS' : return {
//             ...bookInitialState,
//             book : action.payload,
//             message : ''
//         }
//         case 'SET_SEAT_ERROR' : return {
//             ...bookInitialState,
//             book : '',
//             message : action.payload
//         }
//         default : return state
//     }
// }
export {
    showsReducer
}