import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css";
function Header () {
  return (
    <div>
       
       <Navbar bg="primary" variant='dark'>
        <Container>
            <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
            <Nav className='ml-auto'>
                <NavLink as={Link} to="/" className="nav-link">Employees</NavLink>
                <NavLink as={Link} to="/postEmployee" className="nav-link">Post Employees</NavLink>

            </Nav>

             

        </Container>
       </Navbar>

    </div>
  )
}

export default Header