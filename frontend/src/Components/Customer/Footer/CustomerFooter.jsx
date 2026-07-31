import React from 'react';
import './CustomerFooter.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle, FaWrench } from 'react-icons/fa';
import { FiPhone, FiMail, FiStar, FiSettings } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import heroImg from '../../../assets/Footer.png'; 

export default function CustomerFooter() {
  return (
    <footer className="customer-footer">
      {/* Integrated CTA Section */}
      <div className="footer-cta">
        <div className="floating-bg">
          <FiStar className="float-icon star1" />
          <FiStar className="float-icon star2" />
          <FiSettings className="float-icon gear1" />
          <FaWrench className="float-icon wrench1" />
          <div className="float-ball ball1"></div>
          <div className="float-ball ball2"></div>
        </div>
        <div className="cta-content">
          <h2>Looking for Reliable Home Services?</h2>
          <p>Book verified professionals for all your home needs, backed by the FixNow guarantee. From plumbing to cleaning, we've got you covered.</p>
          <div className="cta-actions">
            <button className="btn-primary">Book a Service</button>
            <span className="cta-note">Instant booking available</span>
          </div>
        </div>
        <div className="cta-image-wrapper">
          <img src={heroImg} alt="FixNow Services" className="cta-image" />
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo-wrap">
            <img src={logo} alt="FixNow Logo" className="footer-logo" />
            <span className="footer-brand-name">FixNow</span>
          </div>
          <p className="footer-brand-desc">
            India's premier home service marketplace connecting certified technicians with homeowners. Safe, transparent, and guaranteed.
          </p>
          <div className="footer-socials">
            <a href="#fb"><FaFacebookF /></a>
            <a href="#tw"><FaTwitter /></a>
            <a href="#ig"><FaInstagram /></a>
            <a href="#in"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="footer-col">
          <h5>Company</h5>
          <ul className="footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Support</h5>
          <ul className="footer-list">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#safety">Trust & Safety</a></li>
            <li><a href="#quality">Quality Promise</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h5>Contact Us</h5>
          <ul className="footer-contact-list">
            <li>
              <FiPhone className="contact-icon" />
              <span>(91) 98765 4321 54</span>
            </li>
            <li>
              <FiMail className="contact-icon" />
              <span>support@fixnow.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="copyright">
          © {new Date().getFullYear()} FixNow Marketplace Inc. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
          <a href="#legal">Legal</a>
          <a href="#sitemap">Site Map</a>
        </div>
      </div>
    </footer>
  );
}
