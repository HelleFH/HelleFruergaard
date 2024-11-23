import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import projects from "../projects";
import styled, { keyframes } from "styled-components";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";
import { useSwipeable } from "react-swipeable"; // Import the useSwipeable hook

// Keyframe animations for modal transitions
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

  const handleShowLoginDetails = () => setShowLoginDetails(true);
  const handleCloseLoginModal = () => setShowLoginDetails(false);
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  // Swipeable handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => !isLast && navigateToProject(currentIndex + 1), // Navigate to next project
    onSwipedRight: () => !isFirst && navigateToProject(currentIndex - 1), // Navigate to previous project
    trackMouse: true, // Track mouse events for testing swipe on desktop
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [project, setProject] = useState(null);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  useEffect(() => {
    const selectedProject = projects.find((proj) => proj.id === parseInt(id, 10));
    setProject(selectedProject);

    const navState = location.state || {};
    if (navState.showLoginModal) {
      setShowLoginDetails(true);
    }
  }, [id, location.state]);

  if (!project) {
    return <p>Loading...</p>;
  }

  const currentIndex = projects.findIndex((proj) => proj.id === parseInt(id, 10));
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === projects.length - 1;

  const navigateToProject = (newIndex) => {
    const newProject = projects[newIndex];
    if (newProject) {
      navigate(`/project/${newProject.id}`, {
        state: { showModal: true, selectedProjectIndex: newIndex },
      });
    }
  };

  const navigateBackToProjects = () => {
    navigate("/projects", {
      state: { showModal: true, selectedProjectIndex: currentIndex },
    });
  };



  return (
    <div {...handlers}>
      <ProjectDetailsContainer>
        <BackButton onClick={navigateBackToProjects}>Back to Projects</BackButton>

        {/* Chevron Navigation */}
        <ChevronContainer>
          {!isFirst && (
            <ChevronButton onClick={() => navigateToProject(currentIndex - 1)}>
              &lt;
            </ChevronButton>
          )}
          <ChevronContent>
            {/* Additional content can go here */}
          </ChevronContent>
          {!isLast && (
            <ChevronButton onClick={() => navigateToProject(currentIndex + 1)}>
              &gt;
            </ChevronButton>
          )}
        </ChevronContainer>

        <h3>{project.name}</h3>
        <img src={project.images[0]} alt={project.name} />
        <h5>{project.descriptionHeader}</h5>
        <p>{project.description}</p>
        <h4>Technologies Used</h4>
        <TechnologiesList>
          {project.technologies.split(",").map((tech, index) => (
            <TechItem key={index}>{tech.trim()}</TechItem>
          ))}
          {project.technologiesMore &&
            project.technologiesMore.map((tech, index) => (
              <TechItem key={index}>{tech}</TechItem>
            ))}
        </TechnologiesList>

        <ButtonsContainer>
          {project.username && (
            <LoginButton onClick={handleShowLoginDetails}>
              Show Login Details
            </LoginButton>
          )}
          <ProjectButton href={project.projectLink} target="_blank" rel="noopener noreferrer">
            {project.buttonText || "Visit Project"}
          </ProjectButton>
          <GithubButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
            {project.githubButtonText || "View on GitHub"}
          </GithubButton>
        </ButtonsContainer>
      </ProjectDetailsContainer>

      {/* Login Modal */}
      <LoginModal
        show={showLoginDetails}
        onHide={handleCloseLoginModal}
        project={project}
        handleCopyToClipboard={handleCopyToClipboard}
      />

      <Footer />
    </div>
  );
};

export default ProjectDetail;

const ChevronContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width:100%;
    position:relative;

  justify-content:space-between;
  align-items:center;
  margin:0 auto;
  place-self:center;
  align-self:center;
    
   @media (min-width: 1000px) {
  position:absolute;

  }

`;

const ChevronButton = styled.button`
  background: none;
  border: none;
  font-size: 3rem;
  cursor: pointer;
  color: #333;
  transition: color 0.2s;

  &:hover {
    color: #555;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const BackButton = styled.a`
  cursor: pointer;
  place-self:flex-start;
`;

const ChevronContent = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  img {
    max-width: 300px;
    margin: 1em 0;
  }
`;


const ProjectDetailsContainer = styled.div`
padding:1em;
background-color:white; 
width:100%;
max-width:1000px;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:left;
gap:1em;
top:7em;
margin-bottom:10em;
position:relative;
 img{max-width:300px;} 
  
   @media (min-width: 1000px) {

   padding:5em;
   img{max-width:400px;} 
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
font-size:16px;
  position: relative;
  display: inline-block;
  background-color: #333;
  color: #fff !important;
  padding: 10px;
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
white-space:nowrap;
font-size:16px;
  display: inline-block;
  background-color: #fff;
  color: #333 !important;
  padding: 10px;
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
