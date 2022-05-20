let initialState = {
    popularMovies : {},
    topRatedMovies : {},
    upcomingMovies : {},
    genreList : {},
    detailMovies : '',
    movieReviews : [],
    relatedMovies : [],
    loading : true
}

function movieReducer(state=initialState,action) {
    let {type, payload} = action

   

    switch(type) {
        case "GET_MOVIES_REQUEST" :
           return {...state, loading : true}

        case "GET_MOVIE_SUCCESS" :
            return {...state, 
                popularMovies : payload.popularMovies, 
                topRatedMovies : payload.topRatedMovies, 
                upcomingMovies : payload.upcomingMovies,
                genreList : payload.genreList,
                loading : false
            }

        case "GET_MOVIE_DETAIL_SUCCESS" :
            return {...state, 
                detailMovies : payload.detailMovies,
                movieReviews : payload.movieReviews,
                relatedMovies : payload.relatedMovies
            }

        case "GET_MOVIES_FAILURE" :
            return {...state, loading : false}

        default :
            return {...state}
    }
}

export default movieReducer