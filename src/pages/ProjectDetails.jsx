import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import projects from "../projects";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";
import { useSwipeable } from "react-swipeable"; // Import the useSwipeable hook

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
    <ProjectContainer>
      <div {...handlers}>
        <BackButton onClick={navigateBackToProjects}>Back to Projects</BackButton>
        <ProjectHeader>{project.name}</ProjectHeader>

        {/* Chevron Navigation */}
        <ChevronContainer>
          {!isFirst && (
            <ChevronButton onClick={() => navigateToProject(currentIndex - 1)}>
              &lt;
            </ChevronButton>
          )}
          <ChevronContent></ChevronContent>
          {!isLast && (
            <ChevronButton onClick={() => navigateToProject(currentIndex + 1)}>
              &gt;
            </ChevronButton>
          )}
        </ChevronContainer>

        <ProjectDetailsContainer>
          <ImageWrapper>
            <ProjectImage src={project.images[0]} alt={project.name} />
          </ImageWrapper>
          <ProjectText>
            <h4>{project.descriptionHeader}</h4>
            <p>{project.description}</p>
            <h5>Technologies Used</h5>
            <TechnologiesList>
              {project.technologiesMore &&
                project.technologiesMore.map((tech, index) => (
                  <TechItem key={index}>{tech}</TechItem>
                ))}
            </TechnologiesList>
          </ProjectText>
        </ProjectDetailsContainer>

        <ButtonsContainer>
          {project.username && (
            <LoginButton onClick={handleShowLoginDetails}>
              Show Login Details
            </LoginButton>
          )}
          <ProjectButton
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.buttonText || "Visit Project"}
          </ProjectButton>
          <GithubButton
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.githubButtonText || "View on GitHub"}
          </GithubButton>
        </ButtonsContainer>

        {/* Login Modal */}
        <LoginModal
          show={showLoginDetails}
          onHide={handleCloseLoginModal}
          project={project}
          handleCopyToClipboard={handleCopyToClipboard}
        />
      </div>
    </ProjectContainer>
  );
};

export default ProjectDetail;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  background-color: #f9f9f9;
  box-sizing: border-box;
  padding: 4rem 2rem;
`;

const ProjectHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: left;
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  width: fit-content;
    &::after {
    content: "";
    display: block;
    width: 32px;
    padding-top: 3px;
    border-bottom: 2px solid #757576;
  }
`;

const ProjectDetailsContainer = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 1em auto;
  max-width: 900px;
  width: 100%;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 1000px) {
    gap: 3em;
  }
`;

const ImageWrapper = styled.div`
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ProjectText = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1em;
  color: #444;

  h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 0.5em;
  }
`;

const TechnologiesList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8em;
  font-weight: 500;
  font-size: 1rem;
`;

const TechItem = styled.li`
  display: inline-block;
  background-color: #eef1f3;
  color: #333;
  padding: 5px 12px;
  border-radius: 20px;
  font-weight: 600;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
  align-items: flex-end;
  justify-content:flex-end;
  margin-top: 2em;
  width: 100%;
padding:1rem 3rem;
  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

const GithubButton = styled.a`
border-radius:2px;
  font-size: 1.rem;
  position: relative;
  display: inline-block;
  background-color: #333;
  color: #fff !important;
  padding: .7rem 2.5rem;
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



const BackButton = styled.a`
  font-size: 1.2rem;
  color: #333333 !important;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    font-weight: 600;
    color: #004f73;
  }
`;

const ChevronContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 1.5em;
  width: 100%;
`;

const ChevronButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
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

const ChevronContent = styled.div`
  flex: 1;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin: 0.5em 0;
  }
`;



const LoginButton = styled.a`
  color: #222524;
  text-decoration: none !important;
  font-weight: 400;
  padding: 5px 10px;
  transition: all 0.3s ease-in-out;
  place-self: flex-end;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const ProjectButton = styled.a`
border-radius:2px;
  white-space: nowrap;
  font-size: 16px;
  display: inline-block;
  background-color: #fff;
  color: #333 !important;
  padding: 10px;
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
    content: "";
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
    width: calc(30px);
  }
`;
