import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import NavbarComponent from '../components/Navbar';

const AboutMe = () => {
  return (
    <div>
      <AboutMeWrapper >
        <AboutMeContent className='pt-4 mt-4'>
          <div className='d-flex flex-column justify-center gap-2'>
            <ProfileImage src={`my-portfolio/images/420642903_938437470856991_1642067799514294683_n.jpg`}
 alt="Profile" />
              <div className="d-flex flex-direction-row  gap-2 mt-3">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                <h6 className="font-weight-bold">Hellefruergaardh@gmail.com</h6>
              </div>
              <div className="d-flex flex-direction-row gap-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                <h6 className="font-weight-bold">+45 29664077</h6>
              </div>
              
            <div className="d-flex mt-2 flex-row gap-4 justify-content-center">
            <a className="nav-link" href="https://www.linkedin.com/in/your-linkedin-profile/" >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="nav-link" href="https://github.com/your-github-profile/" >
              <i className="fab fa-github"></i>
            </a>
            </div>
          </div>
          <AboutInfo >
            <h3 >About Me</h3>
            <p>
              Hi, I'm Helle, a web developer based in Copenhagen. I have a passion for building websites and apps,
              especially with Vue.js and React. JavaScript is my main language, and I love diving into new frameworks
              and technologies. I've taken a course in web development at NEXT in Copenhagen and expanded my skills
              through studying full-stack development privately as well as freelancing.
              <br />
              <br />
              Previously, I provided tech support at Texas Instruments and worked as a freelance copywriter and
              translator. I'm always eager to learn and stay current with the latest tech trends.
            </p>
            <SkillsSection>
              <h4 className="mt-4 mb-2">Technologies & APIs I Work With</h4>

              <h5>Front-End Frameworks and Libraries:</h5>
              <HorizontalList>
                <li>React</li>
                <li>Vue</li>
                <li>Zustand</li>
                <li>Angular</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
                <li>Sass / Less</li>
              </HorizontalList>

              <h5>Back-End Frameworks and Platforms:</h5>
              <HorizontalList>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHP</li>
                <li>Django</li>
                <li>Flask</li>
              </HorizontalList>

              <h5>Databases and Data Storage:</h5>
              <HorizontalList>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </HorizontalList>

              <h5>Cloud Platforms and Services:</h5>
              <HorizontalList>
                <li>Firebase</li>
                <li>Google Cloud</li>
                <li>Microsoft Azure</li>
                <li>Heroku</li>
                <li>Vercel</li>
              </HorizontalList>

              <h5>APIs:</h5>
              <HorizontalList>
                <li>RESTful APIs</li>
                <li>External APIs</li>
              </HorizontalList>

              <h5>Version Control and Collaboration:</h5>
              <HorizontalList>
                <li>Git</li>
                <li>GitHub</li>
                <li>Webpack</li>
                <li>Babel</li>
                <li>ESLint / Prettier</li>
              </HorizontalList>
            </SkillsSection>
          </AboutInfo>
        </AboutMeContent>
      </AboutMeWrapper>
    </div>
  );
};

export default AboutMe;

// Styled Components
const AboutMeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding:0 1.2em;

   @media (min-width: 1000px) {
    flex-direction:row;
    padding:0em;

  }

`;

const AboutMeContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  gap:2em;
    @media (min-width: 1000px) {
    flex-direction:row;
    gap:2em;
  }

`;

const ProfileImage = styled.img`
  max-width: 200px;
  border-radius: 2px;
  object-fit: contain;
`;

const ContactInfo = styled.div`
  .font-weight-bold {
    margin-bottom: 0;
  }
`;

const AboutInfo = styled.div`
  flex: 1;

  h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }
`;

const SkillsSection = styled.section`
  h5 {
    margin-top: 20px;
  }
`;

const HorizontalList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  
  li {
    margin-right: 10px;
    position: relative;
    display:flex;
    align-items:center;
    margin-right:1.2em;
    
    &:not(:last-child)::after {
      content: "•";
      font-size: 1.5em; /* Larger bullet size */
      color: midnightblue;
      position: absolute;
      right: -15px; /* Adjust position according to your preference */
    }
  }
`;