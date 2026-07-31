import React from 'react';
import { 
  Settings, 
  Globe, 
  Bell, 
  Lock, 
  Palette, 
  Database,
  Save
} from 'lucide-react';
import './AdminSettings.css';

const AdminSettings = () => {
  return (
    <div className="admin-settings-container">
      <div className="settings-header">
        <div>
          <h1 className="settings-title">System Settings</h1>
          <p className="settings-subtitle">Manage your platform preferences and global configurations.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <Save size={18} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>

      <div className="settings-layout">
        {/* Settings Sidebar Navigation */}
        <div className="settings-nav-sidebar">
          <nav>
            <button className="settings-nav-item active">
              <Globe size={18} />
              <span>General</span>
            </button>
            <button className="settings-nav-item">
              <Palette size={18} />
              <span>Appearance</span>
            </button>
            <button className="settings-nav-item">
              <Bell size={18} />
              <span>Notifications</span>
            </button>
            <button className="settings-nav-item">
              <Lock size={18} />
              <span>Privacy & Security</span>
            </button>
            <button className="settings-nav-item">
              <Database size={18} />
              <span>Data Management</span>
            </button>
          </nav>
        </div>

        {/* Settings Content Area */}
        <div className="settings-content-area">
          
          {/* General Settings Section */}
          <section className="settings-section">
            <div className="section-header">
              <h2>General Settings</h2>
              <p>Configure the basic information for your platform.</p>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <label>Platform Name</label>
                <input type="text" defaultValue="FIX NOW Marketplace" className="settings-input" />
                <span className="input-hint">This name will appear on receipts and customer emails.</span>
              </div>
              
              <div className="form-group">
                <label>Support Email</label>
                <input type="email" defaultValue="support@fixnow.com" className="settings-input" />
              </div>
              
              <div className="form-group">
                <label>Timezone</label>
                <select className="settings-select" defaultValue="IST">
                  <option value="UTC">UTC (Universal Coordinated Time)</option>
                  <option value="IST">IST (Indian Standard Time)</option>
                  <option value="PST">PST (Pacific Standard Time)</option>
                  <option value="EST">EST (Eastern Standard Time)</option>
                </select>
              </div>
              
              <div className="form-group toggle-group">
                <div className="toggle-info">
                  <label>Maintenance Mode</label>
                  <p>Temporarily disable customer bookings.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </section>

          {/* Platform Preferences Section */}
          <section className="settings-section">
            <div className="section-header">
              <h2>Platform Preferences</h2>
              <p>Adjust operational thresholds and limits.</p>
            </div>
            
            <div className="settings-form">
              <div className="form-group">
                <label>Default Commission Rate (%)</label>
                <input type="number" defaultValue="15" className="settings-input" />
              </div>
              
              <div className="form-group toggle-group">
                <div className="toggle-info">
                  <label>Auto-Assign Workers</label>
                  <p>Automatically dispatch available workers to new bookings based on proximity.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="form-group toggle-group">
                <div className="toggle-info">
                  <label>Enable User Reviews</label>
                  <p>Allow customers to rate workers post-service.</p>
                </div>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </section>

          {/* Danger Zone Section */}
          <section className="settings-section danger-zone">
            <div className="section-header">
              <h2>Danger Zone</h2>
              <p>Irreversible and destructive actions.</p>
            </div>
            
            <div className="danger-actions">
              <div className="danger-action-item">
                <div className="danger-info">
                  <h4>Clear Cache</h4>
                  <p>Clear temporary files and reset dashboard layouts.</p>
                </div>
                <button className="btn-outline-danger">Clear Cache</button>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
