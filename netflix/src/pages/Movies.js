import React, { useEffect, useState } from 'react'
import { movieAction } from '../redux/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import { MoviesPagination, PaginationBar } from '../components/';
import { Container, Row, Col, Dropdown, Badge, Button } from 'react-bootstrap'
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
  
  console.log("이 배열에서 찾기", popularMovies.results) // sort에 따라 재정렬된 배열을 얻고싶음 
  console.log("찍혀라얍 내림차순",sortNumber) // 인기순으로 정렬된 po~ 값
  console.log("찍혀라얍 내림차순 배열",sortArray) // 인기순으로 정렬된 po~ 값

  const [id, setId] = useState()
  let genreArray = []
  {
    popularMovies.results.map((item) => {
      for(let i=0; i < item.genre_ids.length; i++){

        if(item.genre_ids[i] == id)
        return genreArray.push(item)
      }
    })
  }

  // let testArray = []
  // {
  //   genreArray.map((num) => {

  //   })
  // }

  console.log("장르배열", genreArray)

  //========================= 정리하자
  const [test, setTest] = useState(popularMovies.results)
  
  const change = () => {
    setTest(popularMovies.results)
  }

  const change2 = () => {
    setTest(sortArray)
  }
  const change3 = () => {
    setTest(genreArray)
    setVariant('dark')
  }

  const [variant, setVariant] = useState('dark')

  const genreClick = (id) => {
    console.log(id)
    setId(id)
    setVariant('danger')
  }

  console.log("장르리스트",genreList)

  if(loading){
    return <ClipLoader color='#ffff' loading={loading} size={150} />
  }

  return (
    <div className='moviesPage'>
      <div className='moviesLeft'>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-basic">
          Filltering
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" onClick={()=>change()}>인기순</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={()=>change2()}>관객순</Dropdown.Item>
          <Dropdown.Item href="#/action-3">장르순</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {
        genreList.map((item) => {
          return <Badge bg={variant} className='genreBadge' onClick={()=>genreClick(item.id)}>{item.name}</Badge>
        })
      }
      <Button variant='danger'  onClick={()=>change3()}>장르검색</Button>
      </div>
      <div className='moviesRight'>
        <Container>
          <Row>
          { 
              test.slice(offset, offset + limit).map((item, index) => {
              return <Col xs={6} key={index}>
                      <MoviesPagination item={item}/>
                    </Col>
            })
          }
          </Row>
        </Container>
        <PaginationBar
          total={test.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  )
}

export default Movies