import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkerHeader.css';
import { FiBell } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../../assets/logo.png';

const WorkerHeader = () => {
  const navigate = useNavigate();

  return (
    <nav className="wd-navbar futuristic-nav">
      <div className="wd-logo-container">
        <img src={logo} alt="Fix Now" className="wd-logo-img" />
        <span className="wd-logo-text">FIX NOW</span>
      </div>
      <div className="wd-nav-links">
        <a className="active" onClick={() => navigate('/worker/dashboard')} style={{ cursor: 'pointer' }}>Home</a>
        <a onClick={() => navigate('/worker/assignments')} style={{ cursor: 'pointer' }}>Assignments</a>
        <a onClick={() => navigate('/worker/history')} style={{ cursor: 'pointer' }}>History</a>
        <a>Earnings</a>
      </div>
      <div className="wd-nav-actions">
        <div className="wd-notification">
          <FiBell size={22} />
          <span className="wd-badge">3</span>
        </div>
        <div className="wd-profile-menu">
          <FaUserCircle size={24} />
          <span>John</span>
        </div>
      </div>
    </nav>
  );
};

export default WorkerHeader;
