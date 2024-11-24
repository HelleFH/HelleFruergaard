import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from "../projects";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "../components/AboutMe";
import HeroSectionComponent from "../components/HeroSection";
import ProjectsContentComponent from "../components/ProjectsContent";
import SkillsSection from "../components/SkillsSection";
import ProjectModal from "../components/ProjectModal";
import styled from "styled-components";
import LoginModal from "../components/LoginModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLoginDetails, setShowLoginDetails] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const overlayColors = [
    "#757576", "#62645c", "#343434", "#222524",
    "#252425", "#3b4040", "#545c5b", "#222524",
    "#545c5b", "#62645c",
  ];

  useEffect(() => {
    setProjects(projectsData);

    const navState = location.state || {};
    if (navState.showModal && typeof navState.selectedProjectIndex === "number") {
      setSelectedProjectIndex(navState.selectedProjectIndex);
      setSelectedColor(overlayColors[navState.selectedProjectIndex % overlayColors.length]);
      setShowModal(true);
    }
  }, [location.state]);

  const handleCloseProjectModal = () => {
    setShowModal(false);
    setSelectedProjectIndex(null);
  };

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
    setShowModal(true);
  };

  const handleNext = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    setShowLoginDetails(false);
    setSelectedColor(overlayColors[(selectedProjectIndex + 1) % projects.length]);
  };

  const handlePrev = () => {
    setSelectedProjectIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    setShowLoginDetails(false);
    setSelectedColor(overlayColors[(selectedProjectIndex - 1 + projects.length) % projects.length]);
  };

  const navigateToDetail = () => {
    navigate(`/project/${projects[selectedProjectIndex]?.id}`, {
      state: { showModal: true, selectedProjectIndex },
    });
    setShowModal(false);
  };

  return (
    <>
      <ProjectModal
        show={showModal}
        handleClose={handleCloseProjectModal}
        overlayColor={overlayColors[selectedProjectIndex % overlayColors.length]}
        selectedProjectIndex={selectedProjectIndex}
        projects={projects}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleShowLoginDetails={handleShowLoginDetails}
        navigateToDetail={navigateToDetail}
      />
      <HeroSectionComponent />
      <div id="container">
        <MainContent>
          <ContentContainer>
            <ProjectsHeader>Projects</ProjectsHeader>
            <ProjectsSubheader>Check out some of my work</ProjectsSubheader>
            <ProjectsContentComponent
              overlayColors={overlayColors}
              handleImageClick={handleImageClick}
            />
            <AboutMe />
          </ContentContainer>
          <SkillsSection />
        </MainContent>

        <LoginModal
          show={showLoginDetails}
          onHide={handleCloseLoginModal}
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
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0 auto;
  gap: 2em;
  justify-content: center;
  align-items: center;

  @media (min-width: 850px) and (max-width: 1175px) {
    padding: 2em;
    gap: 1em;
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 95vw;
    align-items: flex-start;
  }

  @media (min-width: 1175px) {
    gap: 3em;
    padding: 4em;
    display: grid;
    grid-template-columns: 2fr 1fr;
    max-width: 1200px;
    align-items: flex-start;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  padding: 0 1em;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 90vw;
    padding: 0 2em;
  }

  @media (min-width: 1024px) {
    max-width: 85vw;
    padding: 0;
  }
`;

const ProjectsSubheader = styled.h5`
  text-align: left;
  font-weight: 600 !important;
  margin-bottom: 1em;
  border-bottom: 1px solid gray;
`;

const ProjectsHeader = styled.h3`
  font-size: 2rem;
  font-family: 'Istok Web' !important;
`;
