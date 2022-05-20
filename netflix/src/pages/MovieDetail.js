import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieDetailAction } from '../redux/actions/movieDetailAction'
import { Badge } from 'react-bootstrap'
import { Reviews, RelatedMovies } from '../components'
import ClipLoader from "react-spinners/ClipLoader";

const MovieDetail = () => {

  let {id} = useParams()

  const [change, setChange] = useState(true)
  const dispatch = useDispatch()
  const {detailMovies, movieReviews, relatedMovies, loading} = useSelector(state => state.movies)

  useEffect( () => {
    dispatch(movieDetailAction.getDetailMoives(id))
  },[]) 

  // 이거를 적용하면 계속 이것만 돌고있음 왜 그럴까?
  // if(loading){
  //   return <ClipLoader color='#ffff' loading={loading} size={150} />
  // }

  const changeTrue = () => {
    setChange(true)
  }

  const changeFalse = () => {
    setChange(false)
  }

  return (
    <div className='detail'>
      <div className='detailPoster'
      style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailMovies.poster_path}`+")"}}>
      </div>
        <div>
          {
            detailMovies === ''? false :
            detailMovies.genres.map((item, index)=>{
              return <Badge key={index} bg="danger">{item.name}</Badge>
            })  
          }
        </div>
        <h4>{detailMovies.title}</h4>
        <p>{detailMovies.tagline}</p>
        <p>{detailMovies.vote_average}</p>
        <p>{detailMovies.popularity}</p>
        <p>{detailMovies.adult ? "청불" : "under 18" }</p>
        <p>{detailMovies.budget}</p>
        <p>{detailMovies.revenue}</p>
        <p>{detailMovies.release_date}</p>
        <p>{detailMovies.runtime}</p>
        <p>{detailMovies.overview}</p>
        <button onClick={()=>changeTrue()}>REVIEWS</button>  
        <button onClick={()=>changeFalse()}>RELATED MOVIES</button>
        {
          change ? <Reviews review={movieReviews}/> : <RelatedMovies related={relatedMovies}/>
        } 
    </div>
  )
}

export default MovieDetail