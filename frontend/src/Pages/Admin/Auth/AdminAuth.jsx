import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminAuth.css';
import { FiMail, FiLock, FiArrowRight, FiShield, FiActivity, FiSettings, FiStar } from 'react-icons/fi';
import logo from '../../../assets/logo.png';

const AdminAuth = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proceed to admin dashboard after successful mock auth
    navigate('/admin/dashboard');
  };

  return (
    <div className="admin-auth-container">
      {/* Animated Background Elements */}
      <div className="admin-auth-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <div className="admin-auth-wrapper">
        {/* Left Presentation Side */}
        <div className="admin-auth-presentation">
          <div className="presentation-content">
            <div className="admin-logo-wrapper">
              <img src={logo} alt="Fix Now" className="admin-logo" />
              <span>FIX NOW</span>
            </div>
            
            <h1 className="presentation-title">
              Secure Admin Portal
            </h1>
            <p className="presentation-subtitle">
              Join the FixNow core team. Take control of the marketplace with advanced administrative tools.
            </p>

            <div className="animated-icons-grid">
              <div className="icon-card float-1">
                <FiShield className="icon" />
                <span>Enterprise Security</span>
              </div>
              <div className="icon-card float-2 delay-1">
                <FiActivity className="icon" />
                <span>Real-time Analytics</span>
              </div>
              <div className="icon-card float-3 delay-2">
                <FiSettings className="icon" />
                <span>Global Configuration</span>
              </div>
              <div className="icon-card float-4 delay-3">
                <FiStar className="icon" />
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="admin-auth-form-container">
          <div className="form-glass-card">
            <div className="form-header">
              <h2>Create Admin Account</h2>
              <p>Register to access the administrative dashboard.</p>
            </div>

            <form onSubmit={handleSubmit} className="admin-form">
              <div className="input-group">
                <label>Administrator Email</label>
                <div className="input-wrapper">
                  <FiMail className="input-icon" />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="admin@fixnow.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>
                <div className="input-wrapper">
                  <FiLock className="input-icon" />
                  <input 
                    type="password" 
                    name="password"
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="btn-admin-submit">
                <span>Sign Up</span>
                <FiArrowRight className="submit-icon" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
