import React, { useState } from 'react';
import './HamburgerMenu.css';   
import { Nav, NavLink, Navbar,} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
   <div></div>
  );
};

export default HamburgerMenu;
