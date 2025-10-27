import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Upskill from '../components/Upskill';
import Skills from '../components/Skills';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import '../styles/cyber-theme.css';

const HomePage = () => {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Upskill />
      <Blog />
      <Skills />
      <Footer />
    </div>
  );
};

export default HomePage;
