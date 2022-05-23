import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY

function getDetailMoives(id) {
    return async (dispatch) => {
        try {
            dispatch({type : "GET_MOVIES_REQUEST"})
            console.log("디테일페이지 잘옴", {id})

            const DetailMoviesApi = api.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)

            const MovieReviews = api.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
            
            const RelatedMovies = api.get(`/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)

            const Trailer = api.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
     
            let [ detailMovieList, movieReviews, relatedMovies, trailer ] = await Promise.all([DetailMoviesApi, MovieReviews, RelatedMovies, Trailer])
            console.log(detailMovieList.data)
            console.log(movieReviews.data.results)
            console.log('여기확인', relatedMovies.data)
            console.log('트레일러', trailer.data.results)

            dispatch({
                type : "GET_MOVIE_DETAIL_SUCCESS",
                payload : {
                    detailMovies : detailMovieList.data,
                    movieReviews : movieReviews.data.results,
                    relatedMovies : relatedMovies.data.results,
                    trailer : trailer.data.results    
                }
            })

        } catch(error) {
            dispatch({type : "GET_MOVIES_FAILURE"})
        }
    }
}

export const movieDetailAction = {getDetailMoives}