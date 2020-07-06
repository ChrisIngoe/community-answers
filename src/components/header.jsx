import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../logo.svg';
import { useAuth0 } from '../contexts/auth0-context';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, loginWithRedirect, logout } = useAuth0();
  return (
    <Navbar bg="primary" variant="dark" expand="sm" fixed="top">
      <Navbar.Brand>
        <Link to="/" className="header-link">
          <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="logo" />
          Community Answers
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        {user && user.name ? (
          <>
            <Link to="/question" className="header-link">
              Question
            </Link>
            <Link to="/answer" className="header-link">
              Answer
            </Link>
            <Link to="/results" className="header-link">
              Results
            </Link>
            <Link onClick={logout} className="header-link">
              Logout
            </Link>
          </>
        ) : (
          <Link onClick={loginWithRedirect} className="header-link">
            Login
          </Link>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
