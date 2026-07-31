import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './workerAuth.css';
import logo from '../../../assets/logo.png';

const IconCheck = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
);

const IconBriefcase = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const IconDollar = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default function WorkerAuth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      navigate('/admin');
    } else {
      navigate('/worker/register');
    }
  };

  return (
    <div className="worker-auth-page">
      {/* ── Left Branding Pane ── */}
      <div className="worker-auth-left">
        <div className="worker-brand-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <img src={logo} alt="FixNow Logo" style={{ height: '60px' }} />
          </div>
          <h1>Join FixNow as a <span className="worker-gradient-text">Professional</span></h1>
          <p>Expand your business, manage your bookings effortlessly, and earn more with our seamless platform designed for experts.</p>
          
          <div className="worker-features">
            <span className="w-feature-tag"><IconBriefcase /> Flexible Hours</span>
            <span className="w-feature-tag"><IconDollar /> Weekly Payouts</span>
            <span className="w-feature-tag"><IconCheck /> Verified Customers</span>
          </div>
        </div>
      </div>

      {/* ── Right Auth Pane ── */}
      <div className="worker-auth-right">
        <div className="w-auth-card">
          
          <div className="w-auth-tabs">
            <button 
              type="button"
              className={`w-tab ${isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button 
              type="button"
              className={`w-tab ${!isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(false)}
            >
              Apply to Join
            </button>
          </div>

          <div className="w-auth-header">
            <h2>{isLogin ? 'Welcome back' : 'Create your account'}</h2>
            <p>{isLogin ? 'Log in to manage your services and availability.' : 'Start your journey as a FixNow Pro.'}</p>
          </div>

          <form className="w-form" onSubmit={handleSubmit}>
            <div className="w-form-group floating">
              <input type="email" id="email" className="w-input" placeholder=" " required />
              <label htmlFor="email">Email Address</label>
            </div>

            <div className="w-form-group floating">
              <input type="password" id="password" className="w-input" placeholder=" " required />
              <label htmlFor="password">Password</label>
            </div>

            {!isLogin && (
              <div className="w-form-group floating">
                <input type="password" id="confirm" className="w-input" placeholder=" " required />
                <label htmlFor="confirm">Confirm Password</label>
              </div>
            )}

            {!isLogin && (
              <div className="w-form-group terms-group">
                <input type="checkbox" required id="terms" className="w-checkbox" />
                <label htmlFor="terms">
                  I agree to the Terms of Service & Privacy Policy.
                </label>
              </div>
            )}

            <button type="submit" className="w-submit-btn">
              {isLogin ? 'Sign In to Portal' : 'Create Account'}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
