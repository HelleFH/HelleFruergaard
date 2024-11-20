import React, { useState } from 'react';
import styled from 'styled-components';
import projects from '../projects';

const ProjectsContent = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  justify-content: flex-start;
  position: relative;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 100fr);
    gap: 1em;
    grid-template-columns: repeat(4, 100fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 100fr);
  }
`;

const ProjectWrapper = styled.div`
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  margin-bottom: 2em;
  max-width: 96vw;

  grid-column: ${(props) =>
    props.firstRow && props.index < 2 ? 'span 3' : 'auto'};

  @media (min-width: 768px) {
    margin: 0.5em 1em;
    margin-bottom: 0em;
    grid-column: ${(props) =>
      props.index >= 2
        ? 'span 2'
        : props.firstRow && props.index < 2
        ? 'span 4'
        : 'auto'};
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1000px) {
    grid-column: ${(props) =>
      props.index >= 2
        ? 'span 2'
        : props.firstRow && props.index < 2
        ? 'span 3'
        : 'auto'};
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
  border-radius: 3px;

  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  border-radius: 3px;
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
  width: 100%;
`;

const ProjectName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Technologies = styled.span`
  font-size: 0.8rem;
  display: block;
  margin-top: 0.5rem;
  color: #ddd;
`;

const ReadMoreButton = styled.button`
  margin-top: 2em;
  background-color:transparent;
  color: white;
  border: none;
  outline:none;
  color:black;
  font-weight:500;
  text-decoration:underline;
  border-radius: 5px;
  cursor: pointer;
      position: absolute;
    bottom: 0;
    margin-bottom: -2em;


`;

const ProjectsContentComponent = ({ overlayColors, handleImageClick }) => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsToDisplay = showAllProjects ? projects : projects.slice(0, 11);

  return (
    <ProjectsContent id="projects">
      {projectsToDisplay.map((project, index) => (
        <ProjectWrapper
          key={project.id}
          firstRow={index < 3}
          index={index}
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

      {projects.length > 11 && (
        <ReadMoreButton onClick={() => setShowAllProjects(!showAllProjects)}>
          {showAllProjects ? "Show Less" : "Show More"}
        </ReadMoreButton>
      )}
    </ProjectsContent>
  );
};

export default ProjectsContentComponent;