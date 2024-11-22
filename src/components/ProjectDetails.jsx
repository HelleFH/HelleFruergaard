import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To get the project ID from the URL
import projects from '../projects'; // Import your projects data
import styled, { keyframes } from 'styled-components';
import { Modal, Button } from 'react-bootstrap';
import LoginModal from './LoginModal';


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

const ProjectDetail = () => {
    const [showLoginDetails, setShowLoginDetails] = useState(false); // Login Modal state

  const { id } = useParams(); // Extract the project ID from the URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Find the project based on the id
    const selectedProject = projects.find((project) => project.id === parseInt(id));
    setProject(selectedProject); // Set the selected project in state
  }, [id]); // Re-run when the id changes

  if (!project) {
    return <p>Loading...</p>; // Show a loading state until the project is found
  }
  
  const handleShowLoginDetails = () => {
    setShowLoginDetails(true);
  };
  const handleCloseLoginModal = () => {
    setShowLoginDetails(false);
  };


  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  return (
    <div>    <ProductDetailsContainer>
         <LoginModalDialog></LoginModalDialog>
      <img          src={project.images[0]} />
      <h3>{project.name}</h3>

      

<h5>{project.descriptionHeader}</h5>

      <p>{project.description}</p>
      <h4>Technologies Used</h4>
      <TechnologiesList>
        {project.technologies.split(',').map((tech, index) => (
          <TechItem key={index}>{tech.trim()}</TechItem>
        ))}
     
        {project.technologiesMore && project.technologiesMore.length > 0 ? (
          project.technologiesMore.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))
        ) : (
          <li></li>
        )}
      </TechnologiesList>

      <ButtonsContainer>
      <LoginButton onClick={handleShowLoginDetails}>
                Show Login Details
              </LoginButton>
        <ProjectButton href={project.projectLink} target="_blank" rel="noopener noreferrer">
          {project.buttonText || "Visit Project"}
        </ProjectButton>
    
        <GithubButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
          {project.githubButtonText || "View on GitHub"}
        </GithubButton>
        
      </ButtonsContainer>
   
    </ProductDetailsContainer>
            <LoginModal
          show={showLoginDetails}
          onHide={handleCloseLoginModal} // Close Login Modal only
          project={project} 
          handleCopyToClipboard={handleCopyToClipboard}
        />
    </div>

  );
};

export default ProjectDetail;

const ProductDetailsContainer = styled.div`
padding:5em;
background-color:white; 
width:100%;
max-width:1000px;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:1em;
top:7em;
margin-bottom:10em;
position:relative;
 img{max-width:300px;} 
  
   @media (min-width: 1000px) {
   img{max-width:600px;} 
  }
  }
`;
const TechnologiesList = styled.ul`

line-height:1em;
 list-style-type: none;
 padding-left: 0;
 margin: 0;
 margin-bottom:0.5em;
 display: flex;
 justify-content: flex-start;
 flex-wrap: wrap;
 font-family: 'Roboto', sans-serif;
 gap: 0.4em; /* Controls the space between items */
 font-weight:500;
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

const ButtonsContainer = styled.div`
margin-top:1em;
  display: flex;
  gap: 1em;
  align-self:center;
  align-items:center;

  padding-bottom:2em;
    @media (min-width: 1050px) {
    height: fit-content;
    align-self:flex-end;
    padding-right:2em;
    padding-top:1em;
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
    
  @media (min-width: 1050px) {
    min-width:300px;
  }
`;
const LoginButton = styled.a`
  position: relative;
  color: #333;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  padding-left:2em;

  &:hover {
    transform: scale(1.02);
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
