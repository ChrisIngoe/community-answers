import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { useAuth0 } from '../contexts/auth0-context';

const Header = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  return (
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
        Community Answers
      </Navbar.Brand>
      <Nav className="mr-auto">
        {user && user.name ? (
          <>
            <Nav.Link href="/question">Question</Nav.Link>
            <Nav.Link href="/answer">Answer</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </>
        ) : (
          <Nav.Link onClick={loginWithRedirect}>Login</Nav.Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
