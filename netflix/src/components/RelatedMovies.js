import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'

const RelatedMovies = ({related}) => {

  const navigate = useNavigate();

    console.log("디테일",related)
    console.log("디테일",related[0].backdrop_path)
    console.log("디테일",related[0].id)

  const showDetail = (id) => {
    navigate(`/movies/${id}`)
  }

  return (
    <div>
      <Container>
        <Row>
          {
            related.map((num, index)=>{
              return <Col lg={4} key={index} className="relatedMovies">
              <div className='card'
              style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${num.backdrop_path}`+")"}}>
              </div>
              </Col>
            })
          }
        </Row>
      </Container> 
    </div>
  )
}

export default RelatedMovies