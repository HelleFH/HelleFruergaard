import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetails';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/project/:id" element={<ProjectDetail />} />


        </Routes>
      </div>
      <Footer />

    </Router>
  );
};

export default App;