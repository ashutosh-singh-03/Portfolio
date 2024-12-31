import React from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import FloatingNav from './components/FloatingNav/FloatingNav';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <FloatingNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
