import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import projectsData from '../projects'; 
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSwipeable } from 'react-swipeable';
import Footer from '../components/Footer'; 


const Projects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  const handleImageClick = (index) => {
    setSelectedProjectIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
    setShowLoginDetails(false);
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowLoginDetails(false);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setShowLoginDetails(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  const overlayColors = [
    '#ea766a',
    '#a0c4a3',
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
              <Image src={project.images[0]} alt={project.name}/>
              <Overlay className="overlay" color={overlayColors[index % overlayColors.length]}>
                <OverlayText className="text-uppercase">{project.name}</OverlayText>
              </Overlay>
            </ImageWrapper>
          </ProjectWrapper>
        ))}
      </ProjectsContainer>
      <Footer />

      {selectedProjectIndex !== null && (
        <CustomModal show={showModal} onHide={handleClose} centered>
          <CustomModalDialog>
            <ModalBody  {...handlers} >
              <CloseButton onClick={handleClose}>&times;</CloseButton>
              <ChevronLeft onClick={handlePrev}>
                <img className='width-20' src={`./images/chevron.png`} alt="Previous" />
              </ChevronLeft>
              <ModalImage
                src={`${projects[selectedProjectIndex].images[0]}`}
                alt={projects[selectedProjectIndex].name}
                {...handlers}
              />
              <ChevronRight onClick={handleNext}>
                <img className='width-20' src={`./images/chevron.png`} alt="Next" />
              </ChevronRight>
              <div className='d-flex flex-column p-4 justify-content-between'>
                <ModalContent>
                  <ModalTitle className="mb-4">{projects[selectedProjectIndex].name}</ModalTitle>
                  <h5>{projects[selectedProjectIndex].descriptionHeader}</h5>
                  <p>{projects[selectedProjectIndex].description}</p>
                </ModalContent>
                {projects[selectedProjectIndex].username && (
                  <>
                    <LoginButton onClick={() => setShowLoginDetails(!showLoginDetails)}>
                      {showLoginDetails ? 'Hide Login Details' : 'Show Login Details'}
                    </LoginButton>
                    {showLoginDetails && (
                      <LoginDetailsContainer>
                        <LoginDetails>
                          <strong>User:</strong> {projects[selectedProjectIndex].username}<br />
                          <strong>Password:</strong> {projects[selectedProjectIndex].password}
                        </LoginDetails>
                        {projects[selectedProjectIndex].adminUsername && (
                          <AdminLoginDetails>
                            <strong>Admin:</strong> {projects[selectedProjectIndex].adminUsername}<br />
                            <strong>Password:</strong> {projects[selectedProjectIndex].adminPassword}
                          </AdminLoginDetails>
                        )}
                      </LoginDetailsContainer>
                    )}
                  </>
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
    </>
  );
};


export default Projects;

const LoginButton = styled.a`
margin-bottom:1em;
  color: #333;
  border: none;
  cursor: pointer;
  font-weight:500;
  font-size:14px;

  &:hover {
    transform:scale(1.02);
  }
`;

const LoginDetailsContainer = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;
  margin-top: 1em;
  display:flex;
  flex-direction:column;
  position:absolute;
  bottom:25%;
  background-color:white;
  border:1px solid slategray;
padding:0.5em;
  gap:0.5em;
  border-radius:3px;
  align-items:flex-start;
`;


const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  max-width:1175px;
  margin:0 auto;
  margin-bottom:2em;

  @media (min-width: 400px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1051px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const ProjectWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 400px) and (max-width: 767px) {
    max-width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1050px) {
    max-width: 45%;
  }

  @media (min-width: 1051px) {
    max-width: 350px;

    &:nth-child(3) {
      max-width: 500px;
      min-width: 500px;
      margin-bottom: 2em;
    }
    &:nth-child(2) {
      max-width: 500px;
      min-width: 400px;
      margin-bottom: 2em;
    }
  }
  @media (min-width: 1200px) {
    max-width: 350px;

    &:nth-child(3) {
      max-width: 550px;
      min-width: 500px;
      margin-bottom: 2em;
    }
    &:nth-child(2) {
      max-width: 550px;
      min-width: 400px;
      margin-bottom: 2em;
    }
  }
`;

const ProjectIntro = styled.h5`
  font-weight: 700 !important;
  margin-bottom: 2.5em;
  max-width: 900px;
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

  &:hover {
    transform: scale(1.1);
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
    max-width: 1000px;
    border-radius: 0px !important;
    overflow: hidden;
    margin: 0 auto;
  }
  p {
    padding: 0em;
  }   

  @media (min-width: 1200px) {
    .modal-dialog { 
      p {
        padding-right: 3em;
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
  max-width: 600px;
  width: 100%;
  height: auto;
`;

const Chevron = styled.div`
  position: absolute;
  z-index:9999;
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
  max-width: 500px;
  position: relative;
`;

const ModalTitle = styled.h2`
  font-size: 31px;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const LoginDetails = styled.div
`
  font-size: 0.8em;
  color: #333;
  z-index:9999;
`;

const AdminLoginDetails = styled.div`
 
  font-size: 0.8em;
  color: #333;
    z-index:9999;

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

