const bookInitialState = {
    bookings : '',
    allBookings : []
}

const bookReducer = (state = bookInitialState, action) => {
    switch(action.type){
        case 'SET_BOOKING' : return {
            ...state,
            bookings : action.payload
        }
        case 'SET_BOOKINGS' : return {
            ...state,
            allBookings : action.payload
        }
        case 'CLEAR_BOOKING' : return {
            bookings : ''
        }
        default : return state
    }
}


export {
    bookReducer
}