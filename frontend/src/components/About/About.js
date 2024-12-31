import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-info">
            <div className="about-text">
              <p>
                Hi, I'm Ashutosh Singh, a Full Stack Developer passionate about creating 
                efficient web solutions. I specialize in MERN stack development and have 
                a strong foundation in both frontend and backend technologies.
              </p>
              <p>
                Currently focused on building scalable web applications and exploring 
                new technologies. I believe in writing clean code and creating 
                user-friendly applications that solve real-world problems.
              </p>
            </div>
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/path/to/your/image.jpg" alt="Ashutosh Singh" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
