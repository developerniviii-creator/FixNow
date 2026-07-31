import React from 'react';
import './WorkerFooter.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGoogle, FaWrench } from 'react-icons/fa';
import { FiPhone, FiMail, FiStar, FiSettings, FiTool } from 'react-icons/fi';
import logo from '../../../assets/logo.png';
import heroImg from '../../../assets/Footer.png'; 

const WorkerFooter = () => {
  return (
    <footer className="wd-footer">
      {/* Integrated CTA Section */}
      <div className="wd-footer-cta">
        <div className="wd-floating-bg">
          <FiStar className="wd-float-icon star1" />
          <FiStar className="wd-float-icon star2" />
          <FiSettings className="wd-float-icon gear1" />
          <FaWrench className="wd-float-icon wrench1" />
          <div className="wd-float-ball ball1"></div>
          <div className="wd-float-ball ball2"></div>
        </div>
        <div className="wd-cta-content">
          <h2>Ready to Grow Your Service Business?</h2>
          <p>Join thousands of professionals earning more with FixNow's verified leads and flexible scheduling.</p>
          <div className="wd-cta-actions">
            <button className="wd-btn-primary">Apply Now</button>
            <span className="wd-cta-note">Onboarding within 24 hours</span>
          </div>
        </div>
        <div className="wd-cta-image-wrapper">
          <img src={heroImg} alt="Join FixNow" className="wd-cta-image" />
        </div>
      </div>

      <div className="wd-footer-divider"></div>

      <div className="wd-footer-container">
        {/* Brand Column */}
        <div className="wd-footer-col wd-brand-col">
          <div className="wd-footer-logo-wrap">
            <img src={logo} alt="FixNow Logo" className="wd-footer-logo" />
            <span className="wd-footer-brand-name">FixNow</span>
          </div>
          <p className="wd-footer-brand-desc">
            Empowering service professionals with the best tools, leads, and support to grow their business efficiently.
          </p>
          <div className="wd-footer-socials">
            <a href="#fb"><FaFacebookF /></a>
            <a href="#tw"><FaTwitter /></a>
            <a href="#ig"><FaInstagram /></a>
            <a href="#in"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Links Columns */}
        <div className="wd-footer-col">
          <h5>Company</h5>
          <ul className="wd-footer-list">
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>

        <div className="wd-footer-col">
          <h5>Support</h5>
          <ul className="wd-footer-list">
            <li><a href="#help">Help Center</a></li>
            <li><a href="#safety">Trust & Safety</a></li>
            <li><a href="#guidelines">Partner Guidelines</a></li>
            <li><a href="#contact">Contact Support</a></li>
          </ul>
        </div>

        <div className="wd-footer-col wd-contact-col">
          <h5>Contact Us</h5>
          <ul className="wd-footer-contact-list">
            <li>
              <FiPhone className="wd-contact-icon" />
              <span>(91) 98765 4321 54</span>
            </li>
            <li>
              <FiMail className="wd-contact-icon" />
              <span>partners@fixnow.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="wd-footer-bottom-bar">
        <div className="wd-copyright">
          © {new Date().getFullYear()} FixNow Marketplace. All rights reserved.
        </div>
        <div className="wd-footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#sitemap">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

export default WorkerFooter;
