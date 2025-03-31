import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const StyledNavbar = styled.nav`
  border: 1px ${(props) => (props.isScrolled ? 'transparent' : '#f4f4f4')};
  color: ${(props) => (props.isScrolled ? 'black' : 'white')} !important;
  padding-bottom: 1em;
  display: ${(props) => (props.isHidden ? 'none' : 'flex')};
  align-items: flex-start;
  background-color:white;
  position: fixed;
  width: 100vw;
  z-index: 998;
  padding-top: 1em;
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transition: opacity 1s ease, background-color 0.3s ease, color 0.3s ease;

  @media (min-width: 1200px) {
    margin: 0 auto;
  }
`;

const ToggleButton = styled.a`
  margin-left: auto;
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 2em;
  }
`;

const NavLinksContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  min-width: 200px;
  height: 100%;
  background-color: #333;
  color: white !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em;
  padding-top: 2em;
  z-index: 100;
  transform: translateX(100%);
  opacity: ${(props) => (props.isNavOpen ? 1 : 0)};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  &.close {
    transform: translateX(100%);
  }

  @media (min-width: 1200px) {
    max-width: 400px;
  }
  .nav-link {
    color: white;
    font-weight: 600;
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
  font-weight: 200;
`;

const MenuHeader = styled.h1`
  font-weight: 900;
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  let timeout = null;

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

  const handleNavigation = (section) => {
    navigate('/projects');
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }, 100);
    toggleNav();
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHidden(false); // Show navbar on scroll

      // Clear previous timeout and set a new one to hide navbar after inactivity
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.scrollY > 50) setIsHidden(true);
      }, 3000); // Adjust time (in milliseconds) for how long before it hides
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <StyledNavbar isScrolled={isScrolled} isHidden={isHidden} className="navbar navbar-light">
      <ToggleButton onClick={toggleNav}>
        <img
          src={
            isNavOpen || isAnimating
              ? `images/x_icon.svg`
      
              : `/images/nav_icon.svg`
          }
        />
      </ToggleButton>

      <NavLinksContainer
        className={`${isNavOpen ? 'open' : ''} ${isAnimating ? 'close' : ''}`}
        isNavOpen={isNavOpen}
      >
        <MenuHeader className="mt-4 mb-4">Menu</MenuHeader>
        {isNavOpen && <CloseButton onClick={toggleNav}>&times;</CloseButton>}
        <ul className="navbar-nav ml-auto d-flex gap-3">
          <li className="nav-item text-light">
            <button
              className="nav-link btn"
              onClick={() => handleNavigation('about-me')}
            >
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link btn"
              onClick={() => handleNavigation('projects')}
            >
              Projects
            </button>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/helle-fruergaard-577763112/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/HelleFH/"
              onClick={toggleNav}
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </NavLinksContainer>
    </StyledNavbar>
  );
};

export default Navbar;
