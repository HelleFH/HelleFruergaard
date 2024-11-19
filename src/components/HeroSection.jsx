// HeroSection.js
import React from 'react';
import styled from 'styled-components';

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
  padding: 4em;
  margin-bottom:2em;
  width:100vw;
    @media (min-width: 768px) {
  padding: 10em;
  padding-top:6em;

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


  span {
  padding-right:0.2em;
    color: #62645c; /* Style for the span inside h3 */
  }
`;

const Heading1 = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin:0;
word-spacing:-0.2em !important; 
  span {
    color: #62645c; /* Style for the span inside h1 */
        font-weight:400;

  }
`;