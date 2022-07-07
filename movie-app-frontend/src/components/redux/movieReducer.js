let movieInitialState = {
    movies : [],
    film : ''
}

const movieReducer = ( state = movieInitialState, action ) => {
    switch(action.type){
        case 'SET_MOVIES' : return {
            ...movieInitialState,
            movies : action.payload
        }
        case 'VIEW_MOVIE' :  return {
            ...movieInitialState,
            film : action.payload
        }
        default : return state
    }
}

export{
    movieReducer
}