import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from "react-router-dom";

function NavBar () {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">KINF OF BEER</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><NavLink href="/">Home</NavLink></Nav.Link>
                <Nav.Link><NavLink href="/details">Details</NavLink></Nav.Link>
                <Nav.Link><NavLink href="cart">Cart</NavLink></Nav.Link>
                <CartWidget/>
              </Nav>
            </Container>
            
          </Navbar>
          
         
          
        </>
      );
}

export default NavBar