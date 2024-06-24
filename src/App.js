import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="my-portfolio/" element={<Projects />} />
          <Route path="my-portfolio/projects" element={<Projects />} />
          <Route path="my-portfolio/aboutme" element={<AboutMe />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;