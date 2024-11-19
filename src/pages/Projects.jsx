import React, { useEffect, useState } from 'react';
import projectsData from '../projects';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSwipeable } from 'react-swipeable';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCopy } from '@fortawesome/free-solid-svg-icons';
import AboutMe from '../components/AboutMe';
import HeroSectionComponent from '../components/HeroSection';
import ProjectsContentComponent from '../components/ProjectsContent';
import SkillsSection from '../components/SkillsSection';
import ProjectModal from '../components/ProjectModal';
import styled, { keyframes } from 'styled-components';

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
        <HeroSectionComponent />
      <div id="container">
        <MainContent>
          <ContentContainer>
            <h2>Projects</h2>
            <ProjectsSubheader>Here are some of my recent projects</ProjectsSubheader>
            <ProjectsContentComponent 
        overlayColors={overlayColors} 
        handleImageClick={handleImageClick} 
      />

            <AboutMe />
          </ContentContainer>
          <SkillsSection />
        </MainContent>
        <Footer />

        {/* Add modal logic below */}
        <ProjectModal
        show={showModal}
        handleClose={handleClose}
        overlayColor={overlayColors[selectedProjectIndex % overlayColors.length]}
        selectedProjectIndex={selectedProjectIndex}
        projects={projects}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleShowLoginDetails={handleShowLoginDetails}
      />

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

const ContentContainer = styled.div`
display:flex;
flex-direction:column;
height:100%;
justify-content:flex-start;
`;

const ProjectsSubheader = styled.h5`
text-align:left;
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

