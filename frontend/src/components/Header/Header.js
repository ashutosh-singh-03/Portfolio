import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode } = useTheme();

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <a href="#home" className="logo">
          Ashutosh Singh
        </a>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>
            Home
          </a>
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
          </a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
