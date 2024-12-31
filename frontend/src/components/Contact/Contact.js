import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <a href="mailto:example@email.com">example@email.com</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-card-content">
                  <h3>Phone</h3>
                  <p>+1234567890</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-card-content">
                  <h3>Location</h3>
                  <p>City, Country</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-header">
              <h3>Send me a message</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={formData.name ? 'focused' : ''}
                required
              />
              <label className={formData.name ? 'active' : ''}>Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={formData.email ? 'focused' : ''}
                required
              />
              <label className={formData.email ? 'active' : ''}>Email</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={formData.message ? 'focused' : ''}
                required
              ></textarea>
              <label className={formData.message ? 'active' : ''}>Message</label>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
