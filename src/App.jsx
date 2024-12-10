import React from 'react';
import Navbar from './sections/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Project from './sections/Project.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';
import WorkExperience from './sections/Experience.jsx';

const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App