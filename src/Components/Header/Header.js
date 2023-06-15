import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/esm/Navbar';
import Nav from 'react-bootstrap/esm/Nav';

import './Header.css';
import logo from '../../Assets/logo.png';

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <Navbar >
            <Navbar.Brand className="p-0">
              <NavLink exact activeClassName="menu_active" aria-current="page" to="/" >
                <img src={logo} alt="VP Multiplex" />
              </NavLink>

            </Navbar.Brand>
            <Nav className="ml-auto nav-links">
              <NavLink exact activeClassName="menu_active" aria-current="page" to="/favourite" >
                <i className="fa fa-heart pr-1" aria-hidden="true"></i>Favourites
              </NavLink>
            </Nav>
          </Navbar>
        </div>
      </header>
    </>
  )
}

export default Header;