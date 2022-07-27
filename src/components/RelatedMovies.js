import React, { useEffect } from 'react'
import { Container ,Row, Col } from 'react-bootstrap' 
import { Link, useNavigate, useParams } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RelatedMovies = ({related}) => {

  const navigate = useNavigate();

    //console.log("디테일",related)
    //console.log("디테일",related[0].backdrop_path)
    //console.log("디테일",related[0].id)


  const showDetail = (id) => {
    navigate(`/movies/${id}`)
  }

  return (
    <div>
      <Container>
        <Row>
          {
            related.map((num, index)=>{
              return <Col lg={4} key={index} className="relatedMovies" onClick={()=>showDetail(num.id)} path>
              <div className='card'
              style={{backgroundImage :"url("+`https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${num.backdrop_path}`+")"}}>
                <div className='overlay'>
                  <h3>{num.title}</h3>
                  <div>
                      <span><FontAwesomeIcon icon={faStar}/> : {num.vote_average} / </span>
                      <span style={{color : 'red', fontWeight : "bold", fontStyle: 'italic'}}>{num.adult ? "청불" : "Under18" }</span>
                  </div>
                </div>
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