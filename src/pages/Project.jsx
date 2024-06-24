import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../projects'; // Assuming projects data is correctly imported
import Hero from '../components/Hero';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        // Simulate fetching project details
        const foundProject = projects.find(proj => proj.id.toString() === id);

        if (foundProject) {
          setProject(foundProject);
        } else {
          throw new Error(`Project with ID ${id} not found.`);
        }
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) {
    return <LoadingMessage>Loading...</LoadingMessage>;
  }

  if (!project) {
    return <ErrorMessage>Project not found.</ErrorMessage>;
  }

  return (
    <ProjectDetailsWrapper>
      <Hero title={project.name} subtitle={project.technologies}  /> {/* Use the project name for the hero title */}
     
      <ProjectDetailsContainer>
        <div className="d-flex flex-column align-items-center">
          <ImageContainerBG className="image-container-bg">
            <ImageContainer className="d-flex flex-row flex-wrap justify-content-center">
              {project.images.map((imageSrc, index) => (
                <ProjectImage key={index} src={imageSrc} alt={project.name} />
              ))}
            </ImageContainer>
          </ImageContainerBG>
          <ProjectContent>
            {project.login && (
              <LoginContainer id="loginContainer" className="d-flex flex-column position-relative p-3 mt-5 ml-3 justify-content-center">
                <BorderHead>Login Details</BorderHead>
                <p class="mb-0 p-2">{project.login}</p>
                {project.adminLogin && (
                  <p className="admin-login">{project.adminLogin}</p>
                )}
              </LoginContainer>
            )}
            <div className="details-container d-flex flex-column pr-3 pl-3 mb-3 mt-4">
              <h1 className="card-title">{project.name}</h1>
              <p className="card-text" id="technologies">{project.technologies}</p>
              <h5 id="descriptionHeader">{project.descriptionHeader}</h5>
              <p className="card-text" id="description">{project.description}</p>
              <ButtonsContainer>
                <ProjectButton href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  View Project
                </ProjectButton>
                <GithubButton href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </GithubButton>
              </ButtonsContainer>
            </div>
          </ProjectContent>
        </div>
      </ProjectDetailsContainer>
    </ProjectDetailsWrapper>
  );
};

// Styled Components
const ProjectDetailsWrapper = styled.div`
  background-color: #f8f8f8;
`;

const ProjectDetailsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding:0 0.5em 
`;

const ImageContainer = styled.div`

  gap:2em;
`;
const ImageContainerBG = styled.div`
  background-color: #E9D3BC;
  width:100vw;
  align-self:center;
  gap:2em;
  padding:2em;
`;

const ProjectImage = styled.img`
  max-width: 300px;
  flex: 1;
  object-fit: cover;
`;

const LoginContainer = styled.div`
  border: 5px solid #B0DFE6;
  border-radius: 15px;
  max-width: 500px;

`;

const ProjectContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap:1em;
  align-items: center;
  margin-top: 20px;
`;

const ProjectButton = styled.a`
  position: relative;
  display: inline-block;
  background-color: #B0DFE6;
  color: black !important;
  padding: 7px 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  transition: background-color 0.4s ease; /* Transition for background color */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);


  &:hover {
    background-color: #9ec8cf
;
    color:black !important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    background-color:#9ec8cf;
    color:black !important;
    transform: translateX(-50%);
    transition: width 0.4s ease; /* Transition for width */
    z-index: -1;
  }

  &:hover::after {
    width: calc(100% + 30px); /* Width of the filling effect */
  }
`;


const GithubButton = styled.a`
  position: relative;
  display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 13px 40px;
    border-radius: 20px !important;
  padding: 7px 15px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  overflow: hidden;
  transition: background-color 0.4s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: slategray;
    color:f8f8f8!important;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    background-color:slategray;
    color: white!important;
    transform: translateX(-50%);
    transition: width 0.4s ease;
    z-index: -1;
  }

  &:hover::after {
    width: calc(100% + 30px);
  }
`;

const LoadingMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 50px;
  color: red;
`;

const BorderHead = styled.h3`
  position: absolute;
  top: 0;
  left: 50%;
  padding: 0px;
  transform: translateX(-50%) translateY(-15px);
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  text-transform: uppercase;
  color: #337AB7;
  background: #f8f8f8;

  @media (min-width: 600px) {
    font-size: 18px;
  padding: 0 15px;
      line-height: 25px;

  }
`;

export default ProjectDetails;