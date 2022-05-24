import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagination, PaginationBar } from '../components/';
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import ClipLoader from "react-spinners/ClipLoader";


const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies, loading } = useSelector(state => state.movies)

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  let test = []
  {
    popularMovies.results.map((item)=>{
      return test.push(item.popularity)
    })
  }

  console.log("찍혀라얍",test.sort())
  console.log("찍혀라얍 내림차순",test.sort(function(a, b)  {
    return b - a;
  }))
  // 그 .. find all로 해당하는 값 찾은담에 정렬해서 해야겠네 배열함수 2~3번 써야할듯 ..

  if(loading){
    return <ClipLoader color='#ffff' loading={loading} size={150} />
  }

  return (
    <div className='moviesPage'>
      <div className='moviesLeft'>
        Sort
        <br/>
        Filter
        <br/>
        Genres
      </div>
      <div className='moviesRight'>
        <Container>
          <Row>
          { 
              popularMovies.results.slice(offset, offset + limit).map((item, index) => {
              return <Col xs={6} key={index}>
                      <MoviesPagination item={item}/>
                    </Col>
            })
          }
          </Row>
        </Container>
        <PaginationBar
          total={popularMovies.results.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default Movies