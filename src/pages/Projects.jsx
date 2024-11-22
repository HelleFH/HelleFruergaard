import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from "../projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import HeroSectionComponent from "../components/HeroSection";
import ProjectsContentComponent from "../components/ProjectsContent";
import SkillsSection from "../components/SkillsSection";
import ProjectModal from "../components/ProjectModal";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false); // Project Modal state
  const [showLoginDetails, setShowLoginDetails] = useState(false); // Login Modal state
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // Fetch projects data
  useEffect(() => {
    setProjects(projectsData);

    // Check if navigation state exists
    const navState = location.state || {};
    if (navState.showModal && typeof navState.selectedProjectIndex === "number") {
      setSelectedProjectIndex(navState.selectedProjectIndex);
      setSelectedColor(overlayColors[navState.selectedProjectIndex % overlayColors.length]);
      setShowModal(true); // Reopen the modal
    }
  }, [location.state]);

  // Close the Project Modal
  const handleCloseProjectModal = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
  };

  // Close the Login Modal
  const handleCloseLoginModal = () => {
    setShowLoginDetails(false);
  };

  const handleShowLoginDetails = () => {
    setShowLoginDetails(true);
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`${text} copied to clipboard!`);
  };

  const handleImageClick = (index, color) => {
    setSelectedProjectIndex(index);
    setSelectedColor(color);
    setShowModal(true); // Show Project Modal
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowLoginDetails(false); // Close Login Modal when navigating
    setSelectedColor(overlayColors[(selectedProjectIndex + 1) % projects.length]);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setShowLoginDetails(false); // Close Login Modal when navigating
    setSelectedColor(overlayColors[(selectedProjectIndex - 1 + projects.length) % projects.length]);
  };

  // Navigate to detail page, passing modal state
  const navigateToDetail = () => {
    navigate(`/project/${projects[selectedProjectIndex]?.id}`, {
      state: { showModal: true, selectedProjectIndex },
    });
    setShowModal(false); // Close modal before navigating
  };

  const overlayColors = [
    " #757576",
    "#62645c",
    "#343434",
    "#222524",
    " #252425",
    "#3b4040",
    "#545c5b",
    "#222524",
    "#545c5b",
    "#62645c",
  ];

  return (
    <>
      {/* Project Modal */}
      <ProjectModal
        show={showModal}
        handleClose={handleCloseProjectModal} // Close Project Modal only
        overlayColor={overlayColors[selectedProjectIndex % overlayColors.length]}
        selectedProjectIndex={selectedProjectIndex}
        projects={projects}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleShowLoginDetails={handleShowLoginDetails}
        navigateToDetail={navigateToDetail} // Navigate to detail page
      />
      <HeroSectionComponent />
      <div id="container">
        <MainContent>
          <ContentContainer>
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectsSubheader>Check out some of my recent work</ProjectsSubheader>
            <ProjectsContentComponent 
              overlayColors={overlayColors} 
              handleImageClick={handleImageClick} 
            />
            <AboutMe />
          </ContentContainer>
          <SkillsSection />
        </MainContent>
        <Footer />

       

        {/* Add login modal logic below */}
        <LoginModal
          show={showLoginDetails}
          onHide={handleCloseLoginModal} // Close Login Modal only
          project={projects[selectedProjectIndex]}
          overlayColor={overlayColors[selectedProjectIndex % overlayColors.length]}
          handleCopyToClipboard={handleCopyToClipboard}
        />
      </div>
    </>
  );
};

export default Projects;

const MainContent = styled.div`

display:flex; 
flex-direction:column-reverse;
width:100%;
margin:0 auto;
gap:2em;
justify-items:center;
justify-content:center;
align-items:center;

  @media (min-width: 768px) {
  gap:4em;
  padding:4em;
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
max-width:90vw;
`;

const ProjectsSubheader = styled.h5`
text-align:left;
font-weight:600 !important;
margin-bottom:1em;
border-bottom:1px gray solid;
`;
const ProjectsHeader = styled.h3`
font-size: 2rem;
  font-family:'Istok Web' !important;

`;