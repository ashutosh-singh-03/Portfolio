import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './FloatingNav.css';

const FloatingNav = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className={`floating-nav ${isDarkMode ? 'dark' : 'light'}`}>
        <div className="nav-links">
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} title="Home">
            <i className="fas fa-home"></i>
          </a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} title="About">
            <i className="fas fa-user"></i>
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} title="Projects">
            <i className="fas fa-code"></i>
          </a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} title="Contact">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <div className="nav-divider"></div>
        
        <div className="social-links">
          <a href="https://github.com" className="nav-link" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="nav-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com" className="nav-link" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:example@email.com" className="nav-link" target="_blank" rel="noopener noreferrer" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="theme-divider"></div>
        
        <button 
          className="nav-link theme-toggle" 
          onClick={toggleTheme} 
          title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
      </div>

      <button 
        className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
};

export default FloatingNav;
