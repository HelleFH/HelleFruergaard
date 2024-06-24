import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported

const StyledNavbar = styled.nav`
  background-color: #fff;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 2em;
  display: flex;
  align-items: flex-start;
  position: relative;
  color:white !important;
  margin: auto;
  margin-left:1em;
  margin-right:1em;
  padding-top:3.5em;

`;

const NavbarBrand = styled.img`
    width: 2.5em;
    height: 2em;  
    border: solid slategray 2px;
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
  padding-top:4em;
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
      }, 300); // Match this duration with the animation duration
    } else {
      setIsNavOpen(true);
    }
  };

  return (
    <StyledNavbar className="navbar navbar-light">
      <Link className="navbar-brand d-flex gap-3 align-items-center justify-content-center" to="/">
      <NavbarBrand src={`my-portfolio/images/copenhagen.png`} />
      <NavbarName>Helle</NavbarName>
      </Link>

      <ToggleButton onClick={toggleNav}>
      <img
        src={isNavOpen || isAnimating 
          ? `my-portfolio/images/x_icon.svg`
          : `my-portfolio/images/nav_icon.svg`}
        alt="Toggle navigation"
      />      </ToggleButton>

      <NavLinksContainer className={`${isNavOpen ? 'open' : ''} ${isAnimating ? 'close' : ''}`}>
        <MenuHeader className='mt-4'>Menu</MenuHeader>
        {isNavOpen && <CloseButton onClick={toggleNav}>&times;</CloseButton>}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item text-light">
            <Link className="nav-link" to="/aboutme" onClick={toggleNav}>About Me</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects" onClick={toggleNav}>Projects</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/your-linkedin-profile/" onClick={toggleNav}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/your-github-profile/" onClick={toggleNav}>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </NavLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;