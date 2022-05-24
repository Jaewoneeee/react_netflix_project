import React from 'react'
import { useSelector } from 'react-redux'

const SearchPage = () => {

    const { searchMovie } = useSelector(state => state.movies)
    console.log('서치페이지', searchMovie )

  return (
    <div>
        {
            searchMovie !== '' &&
            searchMovie.map((item, index)=>{
                return <div>
                    {index}. {item.title}
                </div>
            }) 
        }
    </div>
  )
}

export default SearchPage