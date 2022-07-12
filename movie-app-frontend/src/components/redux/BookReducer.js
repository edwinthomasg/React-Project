const bookInitialState = {
    bookings : '',
    allBookings : ''
}

const bookReducer = (state = bookInitialState, action) => {
    switch(action.type){
        case 'SET_BOOK' : return {
            ...bookInitialState,
            bookings : action.payload
        }
        case 'SET_BOOKINGS' : return {
            ...bookInitialState,
            allBookings : action.payload
        }
        default : return state
    }
}


export {
    bookReducer
}