import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: 400px;
  background-image: url('./images/bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    height: 200px !important;
  }

  h1, p {
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
`;

const Subtitle = styled.h4`
  font-weight: bold;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  margin: auto;
`;

const Hero = ({ title, subtitle }) => {
  return (
    <HeroSection className="hero-section">
      <ContentWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <FlexContainer>
          <div className="mr-0">
            {/* Additional content can go here */}
          </div>
          <div>
            {/* Additional content can go here */}
          </div>
        </FlexContainer>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;