import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux';
import { Banner } from '../components'

const Home = () => {

  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upcomingMovies} = useSelector(state => state.movies) 
  //console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  return (
    <div>
      {
        popularMovies.results && <Banner movie={popularMovies.results[0]} />
      }
    </div>
  )
}

export default Home