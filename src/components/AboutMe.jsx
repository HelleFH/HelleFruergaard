import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import DownloadSection from './DownloadSection';

const AboutMe = () => {
  return (
    <AboutMeWrapper >
      <AboutMeContent  id="about-me">
 

        <AboutInfo>
          <h3>About Me</h3>
   
          <br></br>

          <p>
            I hold a bachelor's degree in Biology and Chemistry from the University of Southern Denmark, and have recently completed a short course in web development to expand my skill set.
          </p>
          <br></br>

          <p>
            My professional background is diverse, with experience in HR, IT support, and copywriting/translation. This has provided me with a unique combination of strong customer service expertise and technical know-how.
          </p>
          <br></br>

          <p>
            In recent years, I’ve worked as a temporary staff member across various industries, which has helped me stay adaptable and continue growing both professionally and personally.
          </p>
          <br></br>


         
        </AboutInfo>
        <PersonalInfo className="d-flex flex-column align-items-center gap-3 justify-content-center">
          <ProfileImage src={`/images/helle.jpg`} alt="Profile" />
          <div className="d-flex flex-row justify-content-center gap-3">
            <a className="nav-link" href="https://www.linkedin.com/in/helle-fruergaard-577763112/" >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="nav-link" href="https://github.com/HelleFH/" >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <ContactInfo className="d-flex flex-direction-row gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <h6 className="font-weight-bold">Hellefruergaardh@gmail.com</h6>
          </ContactInfo>
          <ContactInfo className="d-flex flex-direction-row gap-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <h6 className="font-weight-bold">+45 29664077</h6>
          </ContactInfo>
          <DownloadSection ></DownloadSection>

          
        </PersonalInfo>
      </AboutMeContent>
    </AboutMeWrapper>
  );
};

export default AboutMe;


const AboutMeWrapper = styled.div`
display:flex;
font-weight:500;
  margin: 4em 0 4em auto;
  padding: 0 0.5em;
  font-family:'Gelasio';

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0em;
  }
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
flex-direction:column-reverse;
  gap: 2em;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 3em;
  }
`;

const PersonalInfo = styled.div`
background-color:#d9d9d9;
padding:2em;
border-radius:2px;
align-items:center;
position: relative; /* Ensure the overlay can position itself relative to this container */
  overflow: hidden; /* Prevent overlay from spilling outside the rounded corners */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    z-index: 1; 

  }
      * {
    position: relative;
    z-index: 2;
  }
  
  @media (min-width: 1000px) {
    flex-direction: row;

    gap: 2em;
  }
`;


const ProfileImage = styled.img`
 width: 200px;  
  height: 200px;  /* Make it a square */
  border-radius: 50%;  /* This makes the image round */
  object-fit: cover; 
  border: 3px solid #fff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8); 
  z-index:0;
`;

const ContactInfo = styled.div`
font-family:'Roboto';
  .font-weight-bold {
    margin-bottom: 0;
  }
`;



const AboutInfo = styled.div`
  flex: 1;

`;

