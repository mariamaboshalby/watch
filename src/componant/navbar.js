import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

function NAvbar({FilterBySearch}) {
    const onSearch=(word)=>{
        FilterBySearch(word);
    }

    return (
        <Navbar expand="lg" className="bg-secondary " variant='dark'>
            <Container >
                <Navbar.Brand href="/">
                    <div className='moviesNavBrand'>Movies</div>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0" >

                    </Nav>
                    <Form className="d-flex ">
                        <input
                            
                            type="search"
                            placeholder="Search"
                            className="me-2 form-control col-12"
                            aria-label="Search"
                            onChange={(e)=>onSearch(e.target.value)}
                        />

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NAvbar;