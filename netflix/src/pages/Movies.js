import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagenation } from '../components/';

const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies } = useSelector(state => state.movies)

  console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  return (
    <div className='moviesPage'>
      <div className='moviesLeft'>
        여기가 분류
      </div>
      <div className='moviesRight'>
        카드
      {
        popularMovies === ''
        ? false
        : popularMovies.results.map((item) => {
            return <div>
                <MoviesPagenation item={item}/>
            </div>
        })
      }
          
      </div>
    </div>
  )
}

export default Movies