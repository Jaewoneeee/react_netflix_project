import React from 'react'

const RelatedMovies = ({related}) => {

    console.log(related[0].backdrop_path)

  return (
    <div>
    <div className='card'
    style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${related[0].backdrop_path}`+")"}}>

    </div>
    </div>
  )
}

export default RelatedMovies