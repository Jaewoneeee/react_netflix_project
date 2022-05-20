import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { movieDetailAction } from '../redux/actions/movieDetailAction'
import { Badge, Button } from 'react-bootstrap'
import { Reviews, RelatedMovies } from '../components'
import ClipLoader from "react-spinners/ClipLoader";

const MovieDetail = () => {

  let {id} = useParams()

  const [change, setChange] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const dispatch = useDispatch()
  const {detailMovies, movieReviews, relatedMovies, loading} = useSelector(state => state.movies)

  useEffect( () => {
    dispatch(movieDetailAction.getDetailMoives(id))
  },[]) 

  // 이거를 적용하면 계속 이것만 돌고있음 왜 그럴까?
  // if(loading){
  //   return <ClipLoader color='#ffff' loading={loading} size={150} />
  // }

  const changeShowMore = () => {
    showMore === false ? setShowMore(true) : setShowMore(false)
  }
  console.log(showMore)

  const changeTrue = () => {
    setChange(true)
  }

  const changeFalse = () => {
    setChange(false)
  }

  return (
    <div className='detailPage'>
      <div className='detailPageTop'>

        <div className='detailPoster'
        style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detailMovies.poster_path}`+")"}}>
        </div>

        <div className='detailInfo'>
            {
              detailMovies === ''? false :
              detailMovies.genres.map((item, index)=>{
                return <Badge className="detailInfo-1" key={index} bg="danger">{item.name}</Badge>
              })  
            }
        
          <h1 style={{fontWeight : "bold"}}>{detailMovies.title}</h1>
          <h5>{detailMovies.tagline}</h5>
          <div className="detailInfo-2">
            <h5>★ {detailMovies.vote_average}</h5>
            <h5>▲ {detailMovies.popularity}</h5>
            <h5 style={{color : 'red', fontWeight : "bold"}}>{detailMovies.adult ? "청불" : "under18" }</h5>
          </div>
          <div className="detailInfo-3">
            <p>{detailMovies.overview}</p>
          </div>
          <div className="detailInfo-3">
            <div>
              <Badge bg="danger">Budget</Badge><p>${detailMovies.budget}</p>
              <Badge bg="danger">Revenue</Badge><p>${detailMovies.revenue}</p>
            </div>
            <div>
              <Badge bg="danger">Release Day</Badge><p>{detailMovies.release_date}</p>
              <Badge bg="danger">Runtime</Badge><p>{detailMovies.runtime}</p>
            </div>
          </div>
          <div>
            Watch Trailer
          </div>
        </div>
      </div>

      <div className='detailPageBottom'>
        <div className='detailPageBottom-top'>
          <Button onClick={()=>changeShowMore()} variant="danger">Show More</Button>
        </div>
        {
          showMore === false ? null :
          <div>
            <div  className='detailPageBottom-middle'>
              <Button onClick={()=>changeTrue()} variant="danger">REVIEWS</Button>  
              <Button onClick={()=>changeFalse()} variant="danger">RELATED MOVIES</Button>
            </div>
            <div className='detailPageBottom-bottom'>
              { change ? <Reviews review={movieReviews}/> : <RelatedMovies related={relatedMovies}/>}
            </div>
          </div>
        }
      </div>

    </div>
  )
}

export default MovieDetail