import React from 'react';
import './CustomerHeader.css';
import logo from '../../../assets/logo.png';

const IconSparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"></path>
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);


export default function CustomerHeader({ 
  currentCity, 
  setCurrentCity, 
  activeBookingsCount = 0, 
  onOpenBookings, 
  onBookService,
  isLoggedIn = false,
  onLoginClick,
  onLogout,
  onNavigateToHome
}) {
  return (
    <header className="customer-header">
      {/* Brand Logo & Title */}
      <div className="header-brand" onClick={onNavigateToHome || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="FixNow Logo" style={{ height: '36px', width: 'auto' }} />
        </div>
        <div>
          <div className="brand-name">FixNow</div>
          <div className="brand-subtext">Service Marketplace</div>
        </div>
      </div>

      {/* Location Picker */}
      <div className="header-location-picker">
        <IconMapPin />
        <span>Location:</span>
        <select 
          value={currentCity} 
          onChange={(e) => setCurrentCity(e.target.value)}
        >
          <option value="Chennai">Chennai</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi NCR">Delhi NCR</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>

      {/* NOTE: Page Navigation Links ("Home", "Services", "Why Us", "Reviews") REMOVED as requested */}

      {/* Header Right Action Buttons */}
      <div className="header-right-actions">
        <button className="btn-book-nav" onClick={onBookService}>
          My Bookings
        </button>

        {isLoggedIn ? (
          <button className="btn-profile-nav" onClick={onLogout} title="Sign Out">
            <div className="profile-avatar">V</div>
          </button>
        ) : (
          <button className="btn-login-nav" onClick={onLoginClick}>
            <IconUser />
            <span>Login</span>
          </button>
        )}
      </div>
    </header>
  );
}
