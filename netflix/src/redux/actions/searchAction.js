import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY

function getSearchMoives(search) {
    return async (dispatch) => {
        try {
            dispatch({type : "GET_MOVIES_REQUEST"})
            console.log("여기 서치한거 찍히나?",search)

            const searchMovieApi = api.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${search}}&page=1&include_adult=false`)
     
            let [ searchMovie ] = await Promise.all([ searchMovieApi ])
            console.log("api테스트", searchMovie.data.results)

            dispatch({
                type : "GET_SEARCH_MOVIE_SUCCESS",
                payload : {
                    searchMovie : searchMovie.data.results
                }
            })

        } catch(error) {
            dispatch({type : "GET_MOVIES_FAILURE"})
        }
    }
}

export const searchAction = {getSearchMoives}