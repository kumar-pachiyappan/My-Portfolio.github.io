import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Upskill from '../components/Upskill';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/cyber-theme.css';

const HomePage = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Welcome />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Upskill />
      <Blog />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
