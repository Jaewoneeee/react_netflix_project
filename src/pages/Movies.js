import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagination, PaginationBar } from '../components/';
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap'
import ClipLoader from "react-spinners/ClipLoader";


const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies, genreList ,loading } = useSelector(state => state.movies)

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  let sortNumber = []
  {
    popularMovies.results.map((item) => {
      return sortNumber.push(item.popularity)
    })
  }
  
  sortNumber.sort((a, b) => b - a);

  let sortArray = []
  {
    sortNumber.map((num) => {
      sortArray.push(popularMovies.results.find(item => item.popularity == num))
    }) 
  }
  
  // console.log("이 배열에서 찾기", popularMovies.results) // sort에 따라 재정렬된 배열을 얻고싶음 
  // console.log("찍혀라얍 내림차순",sortNumber) // 인기순으로 정렬된 po~ 값
  // console.log("찍혀라얍 내림차순 배열",sortArray) // 인기순으로 정렬된 po~ 값

  const [genreId, setGenreId] = useState()
  let genreArray = []
  {
    popularMovies.results.map((item) => {
      for(let i=0; i < item.genre_ids.length; i++){

        if(item.genre_ids[i] == genreId)
        return genreArray.push(item)
      }
    })
  }

  // console.log("장르배열", genreArray)

  //========================= 정리하자
  const [moviesArray, setMoviesArray] = useState(popularMovies.results)
  
  const sortPopularity = () => {
    setMoviesArray(popularMovies.results)
  }

  const sortAudience = () => {
    setMoviesArray(sortArray)
  }
  const genreSearch = () => {
    setMoviesArray(genreArray)
    setVariant('dark')
  }

  const [variant, setVariant] = useState('dark')

  const genreClick = (id) => {
    //console.log(id)
    setGenreId(id)
    setVariant('danger')
  }

  //console.log("장르리스트",genreList)

  if(loading){
    return <ClipLoader color='#ffff' loading={loading} size={150} />
  }

  return (
    <div className='moviesPage'>
      <div className='moviesLeft'>
        <div className='moviesDropdown'>   
          <Dropdown>
            <Dropdown.Toggle>
              Filltering
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" onClick={()=>sortPopularity()}>Popularity</Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={()=>sortAudience()}>Audience</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Button variant='danger' className="genreSearchButton" onClick={()=>genreSearch()}>GenreSearch</Button>
        <div className='genreSearch'> 
          {
            genreList.map((item) => {
              //return <Badge pill bg={variant} className='genreBadge' onClick={()=>genreClick(item.id)}>{item.name}</Badge>
              return <Button size="sm" variant={variant} className='genreBadge' onClick={()=>genreClick(item.id)}>{item.name}</Button>
            })
          }
        </div> 
      </div>
      <div className='moviesRight'>
        <Container>
          <Row>
          { 
              moviesArray.slice(offset, offset + limit).map((item, index) => {
              return <Col xs={6} key={index}>
                      <MoviesPagination item={item}/>
                    </Col>
            })
          }
          </Row>
        </Container>
        <PaginationBar
          total={moviesArray.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default Movies