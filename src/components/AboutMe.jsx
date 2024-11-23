import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import DownloadSection from './DownloadSection';

const AboutMe = () => {
  return (
    <AboutMeWrapper >
      <AboutMeContent  id="about-me">
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

        <AboutInfo>
          <h3>About Me</h3>
          <p>
            I was born in the United States but have lived in Denmark and Singapore for most of my life.
            Currently, I live in Copenhagen with my husband, our two young children, a cat, and a dog.
          </p>
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
  margin-top:4em;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0em;
    margin-top:5em;
  }
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2em;

  @media (min-width: 1000px) {
    flex-direction: row;
    gap: 2em;
  }
`;

const PersonalInfo = styled.div`
margin-top:4em;
background-color:#d9d9d9;
padding:2em;
border-radius:2px;
align-items:center;
  
  @media (min-width: 1000px) {
    flex-direction: row;
    margin-top:0em !important;

    gap: 2em;
  }
`;


const ProfileImage = styled.img`
 width: 200px;  /* Adjust the size */
  height: 200px;  /* Make it a square */
  border-radius: 50%;  /* This makes the image round */
  object-fit: cover;  /* Ensures the image covers the entire area without distortion */
  border: 4px solid #fff;  /* Optional: Adds a white border around the image */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);  /* Optional: Adds a subtle shadow for depth */
`;

const ContactInfo = styled.div`
font-family:'Roboto';
  .font-weight-bold {
    margin-bottom: 0;
  }
`;



const AboutInfo = styled.div`
  flex: 1;
  margin-bottom:4em;
  h3 {
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
      @media (min-width: 1000px) {
    margin-bottom:0em;

  }
`;

