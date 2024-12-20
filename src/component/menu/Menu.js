import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menu.css';

export default function Menu() {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container>
        {/* Logo Image */}
        <Navbar.Brand href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4u1QJ4rpztfF6GoMOiexsWvgGs9LzjFTdcd7r14vmQhJajmOB4eKeAJMYtaQoG4t0iQ&usqp=CAU"
            alt="TMDB Logo"
            width="154px"
            height="50px"
          />
        </Navbar.Brand>
        
        {/* Navbar Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">HOME</Link>
            <Link className="nav-link" to="/top-rated">TOP RATED</Link>
            <Link className="nav-link" to="/upcoming">UPCOMING</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
