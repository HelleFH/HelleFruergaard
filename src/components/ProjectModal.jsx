import React from 'react';
import { useSwipeable } from 'react-swipeable';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router
import styled, { keyframes } from 'styled-components';

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

// Your other code remains the same

const ProjectModal = ({
  show,
  handleClose,
  overlayColor,
  selectedProjectIndex,
  projects,
  handlePrev,
  handleNext,
  handleShowLoginDetails
}) => {
  
  // Call useSwipeable outside of conditionals
  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,  // When swiped left, go to next project
    onSwipedRight: handlePrev, // When swiped right, go to previous project
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  // Make sure selectedProjectIndex is valid and projects are available
  if (selectedProjectIndex === null || !projects[selectedProjectIndex]) {
    return null; // Early return if the project index is invalid
  }


  const project = projects[selectedProjectIndex];

  const technologies = project.technologies || '';


  return (
    <CustomModal show={show} onHide={handleClose} centered overlayColor={overlayColor}>
      <LoginModalDialog>
        <ModalBody {...swipeHandlers}>
          <CloseButton onClick={handleClose}>&times;</CloseButton>
          <ChevronLeft onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} size="sm" />
          </ChevronLeft>
          <ModalImageContainer backdropColor={overlayColor}>
            <ModalImage
              src={project.images[0]}
              alt={project.name}
              backdropColor={overlayColor}
            />
          </ModalImageContainer>
          <ChevronRight onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} size="sm" />
          </ChevronRight>
          <div className="d-flex flex-column justify-content-around gap-2">
            <ModalContent>
              <ModalTitle className="mb-0">{project.name}</ModalTitle>
              <ProjectDescription>{project.descriptionHeader}</ProjectDescription>

              {/* Render technologies as an actual list */}
              <TechnologiesList>
              {project.technologies.split(",").map((tech, index) => (
            <TechItem key={index}>{tech.trim()}</TechItem>
          ))}
 
              </TechnologiesList>
            </ModalContent>
    
            <ButtonsContainer>
              <ProjectButton
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonText}
              </ProjectButton>
              <GithubButton
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.githubButtonText}
              </GithubButton>
          
            </ButtonsContainer>
            <LinksContainer>
            <Link to={`/project/${project.id}`}>
              Read More
              </Link>
              {project.username && (
              <a onClick={handleShowLoginDetails}>
                Show Login Details
              </a>
            )}
          </LinksContainer>
          </div>
        </ModalBody>
      </LoginModalDialog>
    </CustomModal>
  );
};


export default ProjectModal;
// Styled components

  
  const TechnologiesList = styled.ul`

 line-height:1em;
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  margin-bottom:0.5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  gap: 0.4em; /* Controls the space between items */
  font-weight:500;
  width:100%;

    @media (min-width: 1050px) {
  justify-content: flex-start;

  }
`;

const TechItem = styled.li`
   font-size: 1em;
  display: inline-block;
  position: relative;
  font-weight:600;

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
const Chevron = styled.div`
  position: absolute;
  z-index: 9999;
  top: 60%;
  transform: translateY(-50%);
  cursor: pointer;

    svg {
   width: 20px;
  height: 20px;
    }


  @media (min-width: 1050px) {

  svg {
    width: 30px;
    height: 30px;
    }
  }

`;
const ChevronLeft = styled(Chevron)`
  left: 10px;
  display: flex;
  justify-content: flex-start;
`;

const ChevronRight = styled(Chevron)`
  right: 10px; 
  display: flex;
  justify-content: flex-end;
`;
const ModalContent = styled.div`
  position: relative;
  display:flex;
  flex-direction:column;
  gap:1.5em;
  text-align:center;
  max-width: 600px;
  max-height: 100vh; 



    @media (min-width: 800px) {
      text-align:left;

      width: 450px;
  padding:4em 2.5em 1em 1em;
  min-width:450px;

    position: relative;
    bottom: 0;
  }
`;

const ModalTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 1rem;
  font-weight: 600;
  white-space:nowrap;
  
    @media (min-width: 800px) {
  font-size: 32px;

  }
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
  right: 15px;
  margin-top:-6px;
   z-index: 9999;

   @media (min-width: 1050px) {
    right: 20px;
  top: 20px;
  }
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

z-index:9999;
  &.fade-exit-active {
    animation: ${fadeOut} 0.3s ease-out;
  }

  .modal-content {
    width:100%;
    margin: 0 auto; 
  }
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
  min-height:50px;
    padding: 0em;
  }
      &.fade {
  padding:0.3rem !important;
  }


  @media (min-width: 1000px) {
    margin-top:0em;


    .modal-dialog {
    
      p {
        padding-right: 3em;
      }
    }
  }
`;

const ModalBody = styled(Modal.Body)`
  padding: 0;
  border-radius: 0px !important;
  position: relative;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row;
    width: 100% !important;
        height:400px;

  }
`;

const ModalImageContainer = styled.div`
  padding: 1em;
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
    height: auto !important;
  }
`;

const ModalImage = styled.img`
  max-height: 300px;
  object-fit: contain;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.backdropColor};
    opacity: 0.1;
  }
`;

const ProjectDescription = styled.p`
display:none;

  @media (min-width: 1050px) {
  display:flex;
    height: fit-content;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 1em 1em;
  margin-top: 1em;

  a {
    color: #222524;

    font-weight: 400;
    padding: 5px 10px;
    transition: all 0.3s ease-in-out;
    place-self: flex-end;

    &:hover {
      background-color:#f3f3f3;

    }

    &:first-child {
      color:#343434;
    }
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    align-self: flex-start;
    margin-top: 0;
  }
`;

const ButtonsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  gap: 0.5em;
  align-self: center;
  place-self: flex-end;
  padding-right: 2em;

  @media (min-width: 1000px) {
    margin-top: 0em;
    height: fit-content;
    align-self: flex-end;
    padding-right: 1em;
    padding-top: 1em;
  }

  @media (min-width: 800px) and (max-width: 1000px) {
    align-self: flex-start;
 
  }
`;
