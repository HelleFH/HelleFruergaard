import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import projectsData from '../projects';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSwipeable } from 'react-swipeable';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import AboutMe from '../components/AboutMe';


const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
    setShowLoginDetails(false);
  };

  const handleShowLoginDetails = () => {
    setShowLoginDetails(true);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const handleCloseLoginDetails = () => {
    setShowLoginDetails(false);
  };

  const handleImageClick = (index, color) => {
    setSelectedProjectIndex(index);
    setSelectedColor(color);
    setShowModal(true);
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowLoginDetails(false);
    setSelectedColor(overlayColors[(selectedProjectIndex + 1) % projects.length]);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setShowLoginDetails(false);
    setSelectedColor(overlayColors[(selectedProjectIndex - 1 + projects.length) % projects.length]);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const overlayColors = [
    ' #757576',
    '#62645c',
    '#343434',
    '#222524',
    ' #252425',
    '#3b4040',
    '#545c5b',
    '#222524',
    '#545c5b',
    '#62645c',
  ];

  return (
    <>
      <HeroSection>
        <BannerImageWrapper>
          <BannerImage src="images/tree.png" alt="Banner" />
        </BannerImageWrapper>
        <Heading3>
        Welcome <span>to</span></Heading3>
        <Heading1>
        <span>    my </span>  portfolio
        </Heading1>
      </HeroSection>
      <div id="container">
        <MainContent>


          <ProjectsContainer>
            <h2>Projects</h2>
            <ProjectsSubheader>Here are some of my recent projects</ProjectsSubheader>
            <ProjectsContent id="projects">
              {projects.map((project, index) => (
                <ProjectWrapper
                  key={project.id}
                  firstRow={index < 3} // First row (index 0, 1, 2) will have 3 columns for the first two items
                  index={index}  // To decide if the project should span 2 or 3 columns
                >

                  <ImageWrapper onClick={() => handleImageClick(index, overlayColors[index % overlayColors.length])}>
                    <Image src={project.images[0]} alt={project.name} />
                    <Overlay className="overlay" color={overlayColors[index % overlayColors.length]}>
                      <OverlayText>
                        <ProjectName>{project.name}</ProjectName>
                        <Technologies>{project.technologies}</Technologies>
                      </OverlayText>
                    </Overlay>
                  </ImageWrapper>
                </ProjectWrapper>
              ))}
            </ProjectsContent>
            <AboutMe />

          </ProjectsContainer>
         
  <MainContentAbout>
    <AboutHeader>Things that I do</AboutHeader>


    <Section>
      <SectionHeader>Frontend Development</SectionHeader>
      <SectionImage src="images/coding.png" alt="Frontend Development" />
      <div>
        <p>I enjoy making code from scratch, and enjoy bringing ideas to life in the browser.</p>
        <ListHeader>Languages that I speak</ListHeader>
        <List>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>Sass</ListItem>
          <ListItem>PHP</ListItem>
        </List>

        <ListHeader>Frameworks, Tools, and Libraries</ListHeader>

        <List>
          <ListItem>React</ListItem>
          <ListItem>Vue</ListItem>
          <ListItem>Bootstrap</ListItem>
          <ListItem>Tailwind CSS</ListItem>
          <ListItem>JQuery</ListItem>
        </List>
      </div>
    </Section>

    <Section>
      <SectionHeader>Design</SectionHeader>
      <SectionImage src="images/design.png" alt="Design" />
      <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
      <ListHeader>Design Tools</ListHeader>

      <List>
        <ListItem>Affinity Designer</ListItem>
        <ListItem>Figma</ListItem>
        <ListItem>Canva</ListItem>
        <ListItem>Pen and Paper</ListItem>
      </List>
    </Section>

    <Section>
      <SectionHeader>Webmaster and IT Support</SectionHeader>
      <SectionImage src="images/it.png" alt="IT Support" />
      <p>I have lots of experience with IT support, database management, and various tools.</p>
      <ListHeader>Software</ListHeader>

      <List>
        <ListItem>Azure</ListItem>
        <ListItem>AWS</ListItem>
        <ListItem>Salesforce</ListItem>
        <ListItem>Docker</ListItem>
        <ListItem>SQL Server</ListItem>
        <ListItem>Oracle</ListItem>
      </List>
    </Section>
  </MainContentAbout>

        </MainContent>
        <Footer />

        {/* Add modal logic below */}
        {selectedProjectIndex !== null && (
          <CustomModal show={showModal} onHide={handleClose} centered overlayColor={overlayColors[selectedProjectIndex % overlayColors.length]}>
            <CustomModalDialog>
              <ModalBody>
                <CloseButton onClick={handleClose}>&times;</CloseButton>
                <ChevronLeft onClick={handlePrev}>
                  <FontAwesomeIcon icon={faChevronLeft} size="s" />
                </ChevronLeft>
                <ModalImageContainer backdropColor={selectedColor}>
                  <ModalImage
                    src={projects[selectedProjectIndex].images[0]} // Corrected here
                    alt={projects[selectedProjectIndex].name}
                    backdropColor={selectedColor}
                  />
                </ModalImageContainer>
                <ChevronRight onClick={handleNext}>
                  <FontAwesomeIcon icon={faChevronRight} size="s" />
                </ChevronRight>
                <div className="d-flex flex-column p-4 justify-content-between">
                  <ModalContent>
                    <ModalTitle className="mb-4">{projects[selectedProjectIndex].name}</ModalTitle>
                    <h5>{projects[selectedProjectIndex].descriptionHeader}</h5>
                    <ProjectDescription>{projects[selectedProjectIndex].description}</ProjectDescription>
                  </ModalContent>
                  {projects[selectedProjectIndex].username && (
                    <LoginButton onClick={handleShowLoginDetails}>
                      Show Login Details
                    </LoginButton>
                  )}
                  <ButtonsContainer>
                    <ProjectButton
                      href={projects[selectedProjectIndex].projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projects[selectedProjectIndex].buttonText}
                    </ProjectButton>
                    <GithubButton
                      href={projects[selectedProjectIndex].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projects[selectedProjectIndex].githubButtonText}
                    </GithubButton>
                  </ButtonsContainer>
                </div>
              </ModalBody>
            </CustomModalDialog>
          </CustomModal>
        )}

        {/* Login Details Modal */}
        <Modal show={showLoginDetails} onHide={handleClose} centered dialogClassName="custom-modal" backdropClassName="custom-backdrop">
          <div className="custom-modal-content">
            <Modal.Header style={{ backgroundColor: overlayColors[selectedProjectIndex % overlayColors.length] }} closeButton>
              <Modal.Title>Login Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {projects[selectedProjectIndex]?.username && (
                <div>
                  <strong>User:</strong> {projects[selectedProjectIndex].username}
                  <CopyIcon
                    icon={faCopy}
                    onClick={() => handleCopyToClipboard(projects[selectedProjectIndex].username)}
                    title="Copy Username to Clipboard"
                  />
                  <br />
                  <strong>Password:</strong> {projects[selectedProjectIndex].password}
                  <CopyIcon
                    icon={faCopy}
                    onClick={() => handleCopyToClipboard(projects[selectedProjectIndex].password)}
                    title="Copy Password to Clipboard"
                  />
                </div>
              )}
              {projects[selectedProjectIndex]?.adminUsername && (
                <div>
                  <strong>Admin:</strong> {projects[selectedProjectIndex].adminUsername}
                  <CopyIcon
                    icon={faCopy}
                    onClick={() => handleCopyToClipboard(projects[selectedProjectIndex].adminUsername)}
                    title="Copy Admin Username to Clipboard"
                  />
                  <br />
                  <strong>Password:</strong> {projects[selectedProjectIndex].adminPassword}
                  <CopyIcon
                    icon={faCopy}
                    onClick={() => handleCopyToClipboard(projects[selectedProjectIndex].adminPassword)}
                    title="Copy Admin Password to Clipboard"
                  />
                </div>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                OK
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Projects;

const MainContent = styled.div`

display:flex; 
flex-direction:column-reverse;
width:100%;
max-width:96vw;
margin:0 auto;
gap:4em;
justify-items:center;
padding:2em;
justify-content:center;
align-items:center;

  @media (min-width: 768px) {
  display:grid; 
  grid-template-columns:1fr;


  grid-template-columns:2fr 1fr;

    max-width: 1200px;
    max-height:max-content;
  }

`;
const MainContentAbout = styled.div`
align-self:flex-start;
  display:flex;
  flex-direction:column;
    @media (min-width: 768px) {
    margin-bottom:4em;

  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
   background-color: white;
   color:black;
  padding: 2em 1em;
  border-radius: 10px;
  height: fit-content;
  margin-bottom:1em;
`;

const SectionImage = styled.img`
  max-width: 200px;
  margin: 0 auto;
`;

const Line = styled.div`
  border-top: 1px solid #fff;
  margin: 0.5em 0;
`;

const AboutHeader = styled.h2`
  font-size: 2rem;
    font-family:'Istok Web' !important;

`;

const SectionHeader = styled.h3`
  font-size: 1.5rem;
  color:#343434;
    font-family:'Roboto' !important;

`;

const List = styled.ul`
line-height:1em;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  gap: 0.4em; /* Controls the space between items */
`;

const ListHeader = styled.h5`
margin-top:1em;
`;

const ListItem = styled.li`
  font-size: 1em;
  display: inline-block;
  position: relative;

  /* Add the dot before each item */
  &::before {
    content: "•";
    margin-right: 0.4em;  /* Adds space between the dot and text */
    font-size: 1em; /* Adjusts size of the dot */
  }

  &:first-child::before {
    content: ''; /* Remove the dot before the first item */
  }
`;


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
const ProjectsContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:flex-start;
`;


const ProjectsSubheader = styled.h5`
text-align:left;
`;

const ProjectsContent = styled.section`
padding-top:2em;

  display: grid;
  grid-template-columns: repeat(2, 100fr);  /* 6 equal columns */
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
    justify-content:space-evenly;


  /* Responsive layout - adjust the grid for larger screens */
  @media (min-width: 768px) {
    gap: 1em;  /* Gap between grid items */

    grid-template-columns: repeat(4, 100fr);  /* 6 equal columns for medium screens */
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 100fr);  /* 6 equal columns for larger screens */
  }
`;

// Individual project wrapper in the grid
const ProjectWrapper = styled.div`
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
    margin-bottom:2em;


  /* First two projects span 3 columns each */
  grid-column: ${(props) => (props.firstRow && props.index < 2 ? "span 3" : "auto")};

  /* Subsequent projects span 2 columns */
  @media (min-width: 768px) {
      margin-bottom:0em;

    grid-column: ${(props) =>
    props.index >= 2 ? "span 2" : props.firstRow && props.index < 2 ? "span 4" : "auto"};
  }

  &:hover {
    transform: scale(1.1);
  }
@media (min-width: 1000px) {

grid-column: ${(props) =>
    props.index >= 2 ? "span 2" : props.firstRow && props.index < 2 ? "span 3" : "auto"};
}

`;

const LoginButton = styled.a`
  position: absolute;
  margin-bottom: 1em;
  color: #333;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  bottom: 60px;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 1050px) {
    position: relative;
    bottom: 0;
  }
`;


const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  border-radius:3px;
  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  border-radius:3px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  opacity: 0.93;
  transition: opacity 0.8s ease;

  ${ImageWrapper}:hover & {
    opacity: 0;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  color: #ffffff !important;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
  transition: opacity 0.6s ease;
  width:100%;
`;


const ProjectName = styled.span`
  font-size: 1.2rem; /* Larger font size for project name */
  font-weight: bold;
`;

const Technologies = styled.span`
  font-size: 0.8rem; /* Smaller font size for technologies */
  display: block; /* Forces the technologies to appear on a new line */
  margin-top: 0.5rem; /* Adds some space between name and technologies */
  color: #ddd; /* Lighter color for technologies */
`;
const CustomModal = styled(Modal)`
  transition: transform 0.3s ease-out;

  .modal-content {
    border: none !important;

    max-width: fit-content;
    overflow: hidden;
    margin: 0 auto;
  }

  p {
    padding: 0em;
  }

  @media (min-width: 1200px) {
    height: 400px;

    .modal-dialog {
      p {
        padding-right: 3em;
      }
    }
  }
`;

const CustomModalDialog = styled(Modal.Dialog)`
  animation: ${fadeIn} 0.3s ease-out;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  &.fade-exit-active {
    animation: ${fadeOut} 0.3s ease-out;
  }

  transition: transform 0.3s ease-out;

  .modal-dialog {
    max-width: 800px !important;
  }

  @media (min-width: 1200px) {
    .modal-dialog {
      max-width: 1000px !important;
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  padding: 0;
  border-radius: 0px !important;
  position: relative;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: 100% !important;
  }
`;

const ModalImageContainer = styled.div`
  padding: 2em;
  width: 100%;
  max-width: 500px;
  object-fit: contain;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    width: 100% !important;
    height: 400px !important;
  }
`;

const ModalImage = styled.img`
  max-width: 95%;
  object-fit: contain;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.backdropColor};
    z-index: 999;
    opacity: 0.1;
  }
`;

const ProjectDescription = styled.p`
  height: 180px;

  @media (min-width: 1050px) {
    height: fit-content;
  }
`;

const Chevron = styled.div`
  position: absolute;
  z-index: 9999;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 20px;
  height: 20px;

  @media (min-width: 1050px) {
    width: 40px;
    height: 40px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ChevronLeft = styled(Chevron)`
  left: 10px;
  img {
    transform: rotate(-90deg);
    float: left;
  }
`;

const ChevronRight = styled(Chevron)`
  right: 10px;
  img {
    transform: rotate(90deg);
    float: right;
  }
`;

const ModalContent = styled.div`
  max-width: 400px;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 31px;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  align-items: center;
`;

const ProjectButton = styled.a`
  display: inline-block;
  background-color: #fff;
  color: #333 !important;
  padding: 7px 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  border: solid 1px #333;
  border-radius: 20px;
  transition: background-color 0.4s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

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

const CloseButton = styled(Button)`
  position: absolute;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  right: 20px;
  top: 20px;
  z-index: 9999;
`;

const GithubButton = styled.a`
  position: relative;
  display: inline-block;
  background-color: #333;
  color: #fff !important;
  padding: 7px 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  border: solid 1px #333;
  border-radius: 20px;
  transition: background-color 0.4s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

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

const LoginModalDialog = styled(Modal.Dialog)`
  animation: ${fadeIn} 0.3s ease-out;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;

  &.fade-exit-active {
    animation: ${fadeOut} 0.3s ease-out;
  }

  .modal-content {
    width:100%;
    margin: 0 auto; 
  }
`;


const CopyIcon = styled(FontAwesomeIcon)`
  margin-left: 20px;
  cursor: pointer;

  &:hover {
    &:before {
      content: attr(title);
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
      z-index: 999;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid rgba(0, 0, 0, 0.8);
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    &:hover:before,
    &:hover:after {
      opacity: 1;
    }
  }
`;

