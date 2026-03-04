// JoinUs.jsx
import React, { useState } from 'react';
import './JoinUs.css';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    interests: [],
    message: ''
  });

  const interests = [
    'Web Development',
    'Mobile Development',
    'AI/ML',
    'Cloud Computing',
    'UI/UX Design',
    'DevOps',
    'Cybersecurity',
    'Data Science'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked 
        ? [...formData.interests, value]
        : formData.interests.filter(interest => interest !== value);
      
      setFormData({
        ...formData,
        interests: updatedInterests
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Thank you for joining! We\'ll contact you soon.');
  };

  return (
    <section className="join-section" id="join">
      <div className="join-container">
        <div className="join-header">
          <span className="join-subtitle">Become a Member</span>
          <h2 className="join-title">Join Tech DSC</h2>
          <p className="join-description">
            Be part of a community of innovators, developers, and tech enthusiasts. 
            Fill out the form below to get started.
          </p>
        </div>

        <div className="join-content">
          <div className="join-info">
            <div className="info-card">
              <div className="info-icon">🚀</div>
              <h3>Why Join Us?</h3>
              <ul className="benefits-list">
                <li>✓ Hands-on workshops & training</li>
                <li>✓ Networking opportunities</li>
                <li>✓ Mentorship from experts</li>
                <li>✓ Hackathons & events</li>
                <li>✓ Career guidance</li>
                <li>✓ Community support</li>
              </ul>
            </div>
            
            <div className="stats-card">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Members</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Events</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Experts</span>
              </div>
            </div>
          </div>

          <form className="join-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="role">Current Role</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                  <option value="enthusiast">Enthusiast</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experience Level</label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="">Select experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div className="form-group">
              <label>Areas of Interest</label>
              <div className="interests-grid">
                {interests.map((interest) => (
                  <label key={interest} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleChange}
                    />
                    {interest}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Why do you want to join?</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself and why you want to join..."
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Submit Application
              <span className="arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;