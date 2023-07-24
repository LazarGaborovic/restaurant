import React from 'react'
import { Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import './Navigation.css';

function Navigation() {
  return (
    <div className='navigation'>
        <Navbar expand="sm">
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#gallery">GALLERY</NavLink>
              <NavLink href="#menu">MENU</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#contact">CONTACT</NavLink>
            </Nav>
          </NavbarCollapse>
        </Navbar>
    </div>
  )
}

export default Navigation