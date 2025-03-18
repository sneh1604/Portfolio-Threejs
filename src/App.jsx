import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Project from './sections/Project.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import WorkExperience from './sections/Experience.jsx';
import Resume from './sections/Resume.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main className="max-w-7xl mx-auto relative">
            <Hero />
            <About />
            <Project />
            <WorkExperience />
            <Contact />
            <Footer />
          </main>
        } />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App