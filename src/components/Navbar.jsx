import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Use `react-scroll`
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const StyledNavbar = styled.nav`
  background-color: #fff;
  padding-bottom: 1em;
  display: flex;
  align-items: flex-start;
  position: fixed;
  color:white !important;
  width:100%;
  z-index:9999;
  padding-top:1em;
  margin-left:1em;
  margin-right:1em;

  @media (min-width: 1200px) {
    margin:0 auto;
  }   
`;

const NavbarBrand = styled.img`
  width: 2.5em;
  height: 2em;  
`;

const NavbarName = styled.div`
  font-weight: 700;
  color: #333 !important;
  font-size: 14px;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  margin-left:-0.5em;
`;

const ToggleButton = styled.a`
  margin-left: auto;
  cursor: pointer;
  &:hover {
    transform:scale(1.1)
  }

  img {
    width: 32px;
    height: 32px;
    margin-right:2em;
  }
`;

const NavLinksContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 65%;
  max-width:300px;
  height: 100%;
  background-color: #333;
  color: white !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
  padding-top:2em;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

  li a {color:white !important; font-weight:600;}

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(100%);
  }

  @media (min-width: 1200px) {
    max-width:400px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: -1em;
  background: none;
  border: none;
  font-size: 3rem;
  color: black;
  cursor: pointer;
  font-weight:200;
`;

const MenuHeader = styled.h1`
  font-weight:900;
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNav = () => {
    if (isNavOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsNavOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsNavOpen(true);
    }
  };

  return (
    <StyledNavbar className="navbar navbar-light">
      <ToggleButton onClick={toggleNav}>
        <img
          src={isNavOpen || isAnimating 
            ? `images/x_icon.svg`
            : `/images/nav_icon.svg`}
          alt="Toggle navigation"
        />
      </ToggleButton>

      <NavLinksContainer className={`${isNavOpen ? 'open' : ''} ${isAnimating ? 'close' : ''}`}>
        <MenuHeader className='mt-4 mb-4'>Menu</MenuHeader>
        {isNavOpen && <CloseButton onClick={toggleNav}>&times;</CloseButton>}
        <ul className="navbar-nav ml-auto d-flex gap-3">
          <li className="nav-item text-light">
            <ScrollLink 
              to="about-me" 
              smooth={true} 
              duration={500}
              className="nav-link" 
              onClick={toggleNav}>
              About Me
              
            </ScrollLink>
          </li>
          <li className="nav-item">
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500}
              className="nav-link" 
              onClick={toggleNav}>
              Projects
            </ScrollLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/helle-fruergaard-577763112/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/HelleFH/" onClick={toggleNav}>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </NavLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
