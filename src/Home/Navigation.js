import React from 'react'
import { Button, Nav, NavLink, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { PiFacebookLogoThin, PiInstagramLogoThin, PiTwitterLogoThin} from 'react-icons/pi'
import './Navigation.css';

function Navigation() {
  return (
    <div className='navigation container-fluid'>
        <Navbar expand="sm">
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="nav">
              <NavLink href="#home">HOME</NavLink>
              <NavLink href="#gallery">GALLERY</NavLink>
              <NavLink href="#menu">MENU</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#contact">CONTACT</NavLink>
            </Nav>
          </NavbarCollapse> 
        
        </Navbar>
       <div className='social'>
        <NavLink href='#'>  <PiInstagramLogoThin  className='instagram' /></NavLink>
        <NavLink href='#'> <PiFacebookLogoThin className='facebook' /></NavLink>
        <NavLink href='#'> <PiTwitterLogoThin className='twitter' /></NavLink>
        <Button className='reservation'>Make order</Button>
        </div>
    </div>
  )
}

export default Navigation