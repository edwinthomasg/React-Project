const bookInitialState = {
    bookings : ''
}

const bookReducer = (state = bookInitialState, action) => {
    switch(action.type){
        case 'SET_BOOK' : return {
            ...bookInitialState,
            bookings : action.payload
        }
        default : return state
    }
}

export {
    bookReducer
}