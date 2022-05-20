import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({item}) => {

    const { genreList } = useSelector((state) => state.movies)
    console.log(genreList)
    console.log('여기보면',item.id)

    const navigate = useNavigate()

    const showDetail = () => {
        navigate(`/movies/${item.id}`)
    }

  return (
    <div className='card'
        onClick={showDetail}
        style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.poster_path}`+")"}}>
            
        <div className='overlay'>
            <h3>{item.title}</h3>
            <div>
                {
                    item.genre_ids.map((id, index) => {
                        return <Badge key={index} bg="danger">{genreList.find(item => item.id == id).name}</Badge>
                    })
                }
            </div>
            <div>
                <span>★ : {item.vote_average} / </span>
                <span>{item.adult ? "청불" : "under 18" }</span>
            </div>
        </div>
        
    </div>
  )
}

export default MovieCard