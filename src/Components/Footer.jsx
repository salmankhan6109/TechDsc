import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top Section with Logo and Social Links */}
        <div className="footer-top">
          <div className="footer-logo-section">
            <h2 className="footer-logo">Tech DSC</h2>
            <p className="footer-tagline">Building the next generation of tech innovators</p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h3 className="footer-column-title">Quick Links</h3>
              <ul className="footer-links-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#experts">Our Experts</a></li>
                <li><a href="#collaborators">Collaborators</a></li>
                <li><a href="#whatwedo">What We Do</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-column-title">Resources</h3>
              <ul className="footer-links-list">
                <li><a href="#">Blog</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Documentation</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-column-title">Support</h3>
              <ul className="footer-links-list">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </div>

            <div className="footer-links-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-newsletter">
          <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
          <p className="newsletter-text">Get the latest updates and insights delivered to your inbox</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              className="newsletter-input" 
              placeholder="Enter your email" 
              required 
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>

        {/* Footer Bottom Section with Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Tech DSC. All rights reserved. 
            <span className="separator">|</span>
            <span className="credit">Designed with <i className="fas fa-heart"></i> by Salman Aslam</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;