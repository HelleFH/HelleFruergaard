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
  I have a degree in Biology and Chemistry and have completed a web development course to expand my skills. 
  
</p>
<p>  I enjoy working with Vue and React and have strong experience in backend development, including working with Express, building APIs, and handling databases. I’m comfortable working across the full stack and enjoy creating efficient, well-structured solutions.
</p><br></br>


<p>
  I currently work with technical support and customer success, combining problem-solving with technical expertise. My background also includes roles in HR, IT support, and copywriting/translation, giving me a broad skill set that bridges technology and customer interaction.
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

