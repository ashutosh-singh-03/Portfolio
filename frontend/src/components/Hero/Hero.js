import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      
      if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning! ✨');
      } else if (hour >= 12 && hour < 17) {
        setGreeting('Good Afternoon! ✨');
      } else if (hour >= 17 && hour < 22) {
        setGreeting('Good Evening! ✨');
      } else {
        setGreeting('Good Night! ✨');
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="greeting-container">
          <p className="greeting">{greeting}</p>
        </div>
        <h1>I'm Ashutosh Singh</h1>
        <p className="subtitle">Full Stack Developer</p>
        <p className="description">
          Crafting beautiful and functional web experiences with passion and precision.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
