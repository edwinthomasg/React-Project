const showInitialState = {
    shows : ''
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

export {
    showsReducer
}