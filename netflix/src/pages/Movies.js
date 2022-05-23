import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import  MovieCard  from '../components/MovieCard';

const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies } = useSelector(state => state.movies)

  console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  return (
    <div>
     {
       popularMovies === ''
       ? false
       : popularMovies.results.map((item) => {
          return <div>
              <MovieCard item={item}/>
          </div>
       })
     }
        
    </div>
  )
}

export default Movies