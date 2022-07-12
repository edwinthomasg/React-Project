const showInitialState = {
    shows : ''
}
const seatsInitialState = {
    seats : ''
}
const bookInitialState = {
    book : '',
    message : ''
}

const showsReducer = (state = showInitialState, action) => {
    switch(action.type){
        case 'SET_SHOW' : return {
            ...showInitialState,
            shows : action.payload
        }
        default : return state
    }
}
const seatsReducer = (state = seatsInitialState, action) => {
    switch(action.type){
        case 'SET_SEATS' : return {
            ...seatsInitialState,
            seats : action.payload
        }
        default : return state
    }
}
const bookingReducer = (state = bookInitialState, action) => {
    switch(action.type){
        case 'SET_BOOKING_STATUS' : return {
            ...bookInitialState,
            book : action.payload,
            message : ''
        }
        case 'SET_SEAT_ERROR' : return {
            ...bookInitialState,
            book : '',
            message : action.payload
        }
        default : return state
    }
}
export {
    showsReducer,
    seatsReducer,
    bookingReducer
}