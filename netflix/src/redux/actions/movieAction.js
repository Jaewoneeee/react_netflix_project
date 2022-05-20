import api from '../api'

const API_KEY = process.env.REACT_APP_API_KEY

function getMovies() {
    return async (dispatch) => {
        try{
            dispatch({type : "GET_MOVIES_REQUEST"})

            const popularMovieApi = api.get(`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            //console.log(popularMovieApi.data.results)
    
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            //console.log(topRatedApi.data.results)
    
            const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
            //console.log(upcomingApi.data.results)
    
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)

            // 위에서 하나할떄마다 기다리지 말고, 다 올떄까지 기다려 
            // 각각의 API호출을 동시에 실행시키고, 위 세개가 다 올때까지 기다리는거
            let [ popularMovies, topRatedMovies, upcomingMovies, genreList ] = await Promise.all([popularMovieApi, topRatedApi, upcomingApi, genreApi ])
            //console.log("Promise All 이후 : ", data)
            console.log(popularMovies.data.results)
            console.log(topRatedMovies.data.results)
            console.log(upcomingMovies.data.results)
            console.log(genreList)
    
            dispatch({
                type : "GET_MOVIE_SUCCESS",
                payload : { 
                    popularMovies : popularMovies.data, 
                    topRatedMovies : topRatedMovies.data, 
                    upcomingMovies : upcomingMovies.data, 
                    genreList : genreList.data.genres
                }
            })

        } catch(error) {
            dispatch({type : "GET_MOVIES_FAILURE"})
        }

    }
}


export const movieAction = {getMovies}