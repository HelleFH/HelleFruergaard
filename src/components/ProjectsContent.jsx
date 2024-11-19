// ProjectsContent.js
import React from 'react';
import styled from 'styled-components';
import projects from '../projects';

const ProjectsContent = styled.section`
  padding-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 100fr);  /* 6 equal columns */
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  justify-content: space-evenly;

  /* Responsive layout - adjust the grid for larger screens */
  @media (min-width: 768px) {
    gap: 1em;  /* Gap between grid items */
    grid-template-columns: repeat(4, 100fr);  /* 4 equal columns for medium screens */
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
  margin-bottom: 2em;

  /* First two projects span 3 columns each */
  grid-column: ${(props) => (props.firstRow && props.index < 2 ? 'span 3' : 'auto')};

  /* Subsequent projects span 2 columns */
  @media (min-width: 768px) {
    margin-bottom: 0em;
    grid-column: ${(props) =>
      props.index >= 2 ? 'span 2' : props.firstRow && props.index < 2 ? 'span 4' : 'auto'};
  }

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 1000px) {
    grid-column: ${(props) =>
      props.index >= 2 ? 'span 2' : props.firstRow && props.index < 2 ? 'span 3' : 'auto'};
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
  font-size: 1.2rem; /* Larger font size for project name */
  font-weight: bold;
`;

const Technologies = styled.span`
  font-size: 0.8rem; /* Smaller font size for technologies */
  display: block; /* Forces the technologies to appear on a new line */
  margin-top: 0.5rem; /* Adds some space between name and technologies */
  color: #ddd; /* Lighter color for technologies */
`;

const ProjectsContentComponent = ({ overlayColors, handleImageClick }) => {
  return (
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
  );
};

export default ProjectsContentComponent;
