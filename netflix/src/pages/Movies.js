import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagination, PaginationBar } from '../components/';
import { Container, Row, Col, Dropdown } from 'react-bootstrap'


const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies } = useSelector(state => state.movies)

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

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
            popularMovies === ''
            ? false
            : popularMovies.results.slice(offset, offset + limit).map((item) => {
              return <Col xs={6}>
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