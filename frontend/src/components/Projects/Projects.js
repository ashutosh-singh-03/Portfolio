import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with features including user authentication, product management, shopping cart, and secure payment integration. Built with performance and scalability in mind.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application featuring real-time updates, task assignment, progress tracking, and team collaboration tools. Implements drag-and-drop functionality for intuitive task organization.",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "Real-time DB"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard providing detailed weather forecasts, historical data analysis, and location-based weather alerts. Features include interactive maps and data visualization.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox", "Axios"],
      image: "https://via.placeholder.com/400x300",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-item">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-button github" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} className="project-button live-demo" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
