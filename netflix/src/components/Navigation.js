import React, { useState } from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { searchAction } from '../redux/actions/searchAction' 

const Navigation = () => {

    const [search, setSearch] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/searchpage")
        dispatch(searchAction.getSearchMoives(search))
    }

    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
        <Container fluid>
            <Navbar.Brand href="#">
                <img width={100} src='https://img.seoul.co.kr/img/upload/2022/03/17/SSI_20220317115711_O2.jpg'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Link to="/" className='nav-item'>Home</Link>
                <Link to="/movies" className='nav-item'>Movies</Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={changeSearch}
                />
                <Button variant="danger" type='submit'>Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation