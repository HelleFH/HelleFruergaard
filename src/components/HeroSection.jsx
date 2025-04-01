// HeroSection.js
import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';


const HeroSectionComponent = () => {
  return (
    <HeroSection>
      <BannerImageWrapper>
        <BannerImage src="images/tree.png" alt="Banner" />
      </BannerImageWrapper>
      <Heading3>
        Welcome <span>to</span>
      </Heading3>
      <Heading1>
        <span>my </span>portfolio
      </Heading1>
      <ProjectsButton><ScrollLink
              to="projects" 
              smooth={true} 
              duration={500}
              >
             View projects
            </ScrollLink>
            </ProjectsButton>
    </HeroSection>
  );
};

export default HeroSectionComponent;


const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  z-index: 1;
  position: relative;
  padding-top:8em;
  width:100vw;

    &::after {
content: "";
display: block;
width: 64px;
padding-top: 8em;
border-bottom: 2px solid #757576;
}

@media (min-width: 768px) {

  &::after {
padding-top: 13em;
width: 128px;


}
  }
`;

// Wrapper for the banner image
const BannerImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const BannerImage = styled.img`
  max-width: 200px;
`;

// Styled h3 and h1 with span elements
const Heading3 = styled.h3`
  font-size: 2rem;
  margin:0;
    padding-top:0.5em;

word-spacing:-0.2em !important; 

  span {
  font-weight:400;
  padding-right:0.2em;
    color: #62645c; /* Style for the span inside h3 */
  }
`;
const ProjectsButton = styled.a`
border-radius:2px;
 position: relative;
  display: inline-block;
  background-color: white;
  color:black !important;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  border: solid 1px #333;
  transition: background-color 0.4s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-top:2em;
  font-family:'montserrat';
  font-weight:500;
  letter-spacing:-0.05em;
  bottom:0;

  &:hover {
    background-color: #555;
    color: #fff !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    background-color: #555;
    color: white !important;
    transform: translateX(-50%);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    width: calc(100% + 30px);
  }
`;


const Heading1 = styled.h1`

  font-size: 2.5rem;
  margin:0;
word-spacing:-0.2em !important; 
  span {
    color: #62645c;
    font-weight:400;
}
    @media (min-width: 768px) {
      
    font-size: 4rem;

  }
`;