import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const MovieCard = ({item}) => {

    const { genreList } = useSelector((state) => state.movies)
    console.log(genreList)
    // 혼자시도해본거
    //console.log(genreList[12].id)
    //let test = item.genre_ids
    //console.log(test)
    //let list = test.filter((aa) => aa.id.includes(genreList))
    //console.log(list)
    //console.log(test.includes(genreList[1].id))

  return (
    <div className='card'
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