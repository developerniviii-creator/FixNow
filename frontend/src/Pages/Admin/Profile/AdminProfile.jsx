import React from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  Settings,
  Camera,
  Edit
} from 'lucide-react';
import './AdminProfile.css';

const AdminProfile = () => {
  return (
    <div className="admin-profile-container">
      <div className="profile-header-banner">
        <div className="profile-cover"></div>
        <div className="profile-avatar-container">
          <div className="profile-avatar-large">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff&size=120" alt="Admin" />
            <button className="btn-edit-avatar"><Camera size={16} /></button>
          </div>
          <div className="profile-title-group">
            <h1>Admin User</h1>
            <p className="profile-role"><ShieldCheck size={16} /> Super Administrator</p>
          </div>
        </div>
      </div>

      <div className="profile-content-grid">
        {/* Left Column - Personal Info */}
        <div className="profile-card personal-info-card">
          <div className="card-header">
            <h2>Personal Information</h2>
            <button className="btn-icon"><Edit size={18} /></button>
          </div>
          <div className="info-list">
            <div className="info-item">
              <div className="info-icon bg-blue"><User size={18} /></div>
              <div className="info-details">
                <span className="info-label">Full Name</span>
                <span className="info-value">Admin User</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon bg-purple"><Mail size={18} /></div>
              <div className="info-details">
                <span className="info-label">Email Address</span>
                <span className="info-value">admin@fixnow.com</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon bg-green"><Phone size={18} /></div>
              <div className="info-details">
                <span className="info-label">Phone Number</span>
                <span className="info-value">+91 98765 43210</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon bg-orange"><MapPin size={18} /></div>
              <div className="info-details">
                <span className="info-label">Location</span>
                <span className="info-value">Chennai, Tamil Nadu</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon bg-cyan"><Briefcase size={18} /></div>
              <div className="info-details">
                <span className="info-label">Department</span>
                <span className="info-value">Core Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Preferences & Security */}
        <div className="profile-settings-column">
          <div className="profile-card security-card">
            <div className="card-header">
              <h2>Security Settings</h2>
            </div>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Password</h4>
                  <p>Last changed 3 months ago</p>
                </div>
                <button className="btn-outline-small">Change</button>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Two-Factor Authentication</h4>
                  <p>Secure your account with 2FA</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>

          <div className="profile-card preferences-card">
            <div className="card-header">
              <h2>Notifications</h2>
            </div>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Email Notifications</h4>
                  <p>Receive daily summary reports</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="setting-item">
                <div className="setting-info">
                  <h4>Push Notifications</h4>
                  <p>Get alerts for new urgent bookings</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
