import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux';
import { Banner, MoiveSlide } from '../components'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {

  const dispatch = useDispatch()
  const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state => state.movies) 
  //console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  // loading이 true면 loading스피너를 보여주고
  // loading이 false면 밑에 data를 보여주고
  // true : data 도착 전
  // false : data 도착 후, 에러가 났을때 
  if(loading){
    return <ClipLoader color='#ffff' loading={loading} size={150} />
  }

  return (
    <div>
      {/* {popularMovies.results && <Banner movie={popularMovies.results[2]} />} */}
      {/* 위에 로딩스피너가 있기때문에 이제 조건부랜더링이 필요가 없다 */}
      <Banner movie={popularMovies.results[9]} />

      <h1>Popular Movie</h1>
      <MoiveSlide movies={popularMovies}/>

      <h1>Top rated Movie</h1>
      <MoiveSlide movies={topRatedMovies}/>
      
      <h1>Upcoming Movie</h1>
      <MoiveSlide movies={upcomingMovies}/>
    </div>
  )
}

export default Home