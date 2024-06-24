import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import projectsData from '../projects'; // Assuming projects data is imported from a file
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  useEffect(() => {
    // Simulating fetching projects data
    setProjects(projectsData);
  }, []);

  const handleImageClick = (index) => {
    setSelectedProjectIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const overlayColors = [
    '#ea766a',
    ' #a0c4a3',
    '#5dc6aa',
    '#da9567',
    '#cab0a6',
    '#da9dd9',
    '#6da178',
    '#ddd173',
    '#9a99e3',
  ];

  return (
    <>
      <ProjectsContainer className="projects">
        <ProjectIntro className="font-weight-bold lh-base mt-5">
          I'm a web developer based in Copenhagen,
          driven by curiosity and passionate about creating engaging websites and apps.
        </ProjectIntro>

        {projects.map((project, index) => (
          <ProjectWrapper key={project.id} large={(index === 0 || index === 1)}>
            <ImageWrapper onClick={() => handleImageClick(index)}>
              <Image src={project.images[0]} alt={project.name} />
              <Overlay className="overlay" color={overlayColors[index % overlayColors.length]}>
                <OverlayText className="text-uppercase">{project.name}</OverlayText>
              </Overlay>
            </ImageWrapper>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>

      {selectedProjectIndex !== null && (
        <CustomModal show={showModal} onHide={handleClose} centered>
          <CustomModalDialog>
            <ModalBody>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
              <ChevronLeft onClick={handlePrev} />
      <ModalImage src={`my-portfolio${projects[selectedProjectIndex].images[0]}`} alt={projects[selectedProjectIndex].name} />
      <ChevronRight onClick={handleNext} />
              <div className='d-flex flex-column p-4 space-between'>
                <ModalContent>
                  <ModalTitle className="mt-4 mb-4">{projects[selectedProjectIndex].name}</ModalTitle>
                  <p>{projects[selectedProjectIndex].description}</p>
                </ModalContent>
                <ButtonsContainer>
                  <ProjectButton
                    href={projects[selectedProjectIndex].projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </ProjectButton>
                  <GithubButton
                    href={projects[selectedProjectIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </GithubButton>
                </ButtonsContainer>
              </div>
            </ModalBody>

          </CustomModalDialog>
        </CustomModal>
      )}
    </>
  );
};

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-left: 1em;
  margin-right: 1em;

  @media (min-width: 1000px) {
    /* Grid view on desktop */
    flex-direction: row;
    flex-wrap: wrap;
    grid-gap: 20px;
    justify-content: space-between;
  }
`;

const ProjectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1000px) {
    max-width: 300px;

    &:nth-child(3) {
      max-width: 550px;
      min-width: 500px;
      margin-bottom: 2em;
        min-height:400px !important;
      flex: 1 1 100px;

      img {        
      min-height:400px !important;
}
    }
    &:nth-child(2) {
      flex: 100px 1 1;
      max-width: 550px;
      min-width: 400px;
        min-height:400px !important;
      margin-bottom: 2em;
          img {        min-height:400px !important;
}
    }
  }
`;

const ProjectIntro = styled.h5`
  font-weight: 700 !important;
  margin-bottom: 2.5em;
  max-width: 1000px;
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
 
  }
`;

const Overlay = styled.div`
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
  font-size: 1.6em;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
  
  transition: opacity 0.6s ease;
`;

const CustomModal = styled(Modal)`
  .modal-content {
    border-radius: 0px !important;
    overflow: hidden;
    margin:0 auto;
    border:none;
    width:fit-content;

p    {
    
    min-height:145px;}
    }
  

    img{
    max-width:500px;
    max-height:auto;
    object-fit:cover;
    }
   @media (min-width: 1200px) {

   .modal-content
    p
    {padding-left:2em; 
    padding-right:2em;
    min-height:150px;}
    }
      
  }
   
  }
`;

const CustomModalDialog = styled(Modal.Dialog)`
  .modal-dialog {
    max-width: 800px !important; /* Set a custom max-width */
  }

  @media (min-width: 1200px) {
    .modal-dialog { 
      max-width: 1000px !important; /* Adjust max-width for larger screens */
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

const ModalImage = styled.img`
  width: 100%;
  height: auto;


`;

const Chevron = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: #333;
  cursor: pointer;
  z-index: 10;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;

const ChevronLeft = styled(Chevron)`
  left: 10px;

  img {
  width:20% !important;
  max-width:5% !important;
  transform: rotate(-90deg);
  }
`;

const ChevronRight = styled(Chevron)`
  right: 10px;
  img {
  max-width:5% !important;
  transform: rotate(90deg);
  float:right;
  }
`;
const ModalContent = styled.div`
  padding: 1rem;
  border-radius: 0px !important;
  border:none;

  @media (min-width: 1000px) {
    margin: 0 auto !important;
    max-width:400px;
    max-height:400px;
  }
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalFooter = styled(Modal.Footer)`
  border-top: none;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  align-items: center;
  padding:0 1em 1em 1em;
`;

const ProjectButton = styled.a`
  position: relative;
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
  top: 20px;`
  ;

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
  }`
  ;



export default Projects;