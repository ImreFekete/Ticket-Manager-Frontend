
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { UserContext } from '../../App';

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">Ticket-Manager</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {!user ?
              <Nav>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </Nav>
              :
              <Nav>
                <Nav.Link onClick={() => { setUser(null); sessionStorage.clear(); }} as={Link} to="/">Logout</Nav.Link>
              </Nav>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;