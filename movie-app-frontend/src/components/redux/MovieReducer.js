let movieInitialState = {
    movies : [],
    movie : '',
    movieMessage : '',
    movieSuccess : false
}

const movieReducer = ( state = movieInitialState, action ) => {
    switch(action.type){
        case 'SET_MOVIES' : return {
            ...state,
            movies : action.payload,
            movieMessage : ''
        }
        case 'SET_MOVIE' :  return {
            ...state,
            movie : action.payload
        }
        case 'SET_ADDED_MOVIE' : return {
            ...state,
            movieMessage : action.payload,
            movieSuccess : true,
        }
        case 'SET_MOVIE_ERROR' : return {
            ...state,
            movieMessage : action.payload,
            movieSuccess : false
        }
        case 'CLEAR_MOVIE_ERROR' : return {
            ...state,
            movieMessage : '',
            movieSuccess : ''
        }
        default : return state
    }
}

export{
    movieReducer
}