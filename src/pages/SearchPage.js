import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { MoviesPagination, PaginationBar } from '../components';
import ClipLoader from "react-spinners/ClipLoader";

const SearchPage = () => {

    const { searchMovie, loading } = useSelector(state => state.movies)
    //console.log('서치페이지', searchMovie )

    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    if(loading){
        return <ClipLoader color='#ffff' loading={loading} size={150} />
    }

  return (
    <div className='searchPage'>
        <div className='searchPageCard'>
            <Container>
                <Row>
                { 
                searchMovie.slice(offset, offset + limit).map((item) => {
                    return <Col xs={3}>
                    <MoviesPagination item={item}/>
                        </Col>
                })
                }
                </Row>
            </Container>
            <PaginationBar
                total={searchMovie.length}
                limit={limit}
                page={page}
                setPage={setPage}
            />
        </div>
    </div>
  )
}

export default SearchPage