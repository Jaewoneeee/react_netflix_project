import React, { useEffect } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagenation } from '../components/';
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const Movies = () => {

  const dispatch = useDispatch()
  const { popularMovies } = useSelector(state => state.movies)

  console.log(popularMovies)

  useEffect(()=> {
    dispatch(movieAction.getMovies())
  },[])

  return (
    <div className='moviesPage'>
      <div className='moviesLeft'>
        <Dropdown className="d-inline mx-2" variant='dark'>
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu menuVariant='dark'>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='moviesRight'>
        <Container>
          <Row>
          { 
            popularMovies === ''
            ? false
            : popularMovies.results.map((item) => {
              return <Col xs={6}>
                      <MoviesPagenation item={item}/>
                    </Col>
            })
          }
          </Row>
        </Container>
          
      </div>
    </div>
  )
}

export default Movies