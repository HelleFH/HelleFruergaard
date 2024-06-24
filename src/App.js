import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import your components/pages
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ProjectDetails from './pages/Project';

const App = () => {
  return (
    <Router>
      <div>

        <Navbar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Use element instead of component */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
