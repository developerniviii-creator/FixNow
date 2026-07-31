import React, { useState, useEffect } from 'react';
import './login.css';
import illustrationImg from '../../../assets/home_services_illustration.png';

// SVG Icons Component Helpers to avoid external dependencies
const Icons = {
  Logo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Security: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Lightning: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Analytics: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  ),
  User: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  EyeOff: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  ),
  AlertCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
};

function Login({ onLoginSuccess }) {
  const [mode, setMode] = useState('login'); // 'login' or 'signup'
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    rememberMe: false,
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [toast, setToast] = useState({ show: false, message: '' });

  // Handle toast timeout
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '' });
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'signup' : 'login');
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      agreeTerms: false
    });
    setErrors({});
    setTouched({});
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsSuccess(false);
  };

  const validateField = (name, value) => {
    let error = '';
    if (name === 'name' && mode === 'signup') {
      if (!value.trim()) {
        error = 'Name is required';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
    }

    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address';
      }
    }

    if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters';
      }
    }

    if (name === 'confirmPassword' && mode === 'signup') {
      if (!value) {
        error = 'Please confirm your password';
      } else if (value !== formData.password) {
        error = 'Passwords do not match';
      }
    }

    if (name === 'agreeTerms' && mode === 'signup') {
      if (!value) {
        error = 'You must accept the Terms of Service';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    const val = type === 'checkbox' ? checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: val
    }));

    if (touched[name]) {
      const fieldError = validateField(name, val);
      setErrors(prev => ({
        ...prev,
        [name]: fieldError
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, type, checked, value } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const fieldError = validateField(name, val);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (mode === 'signup') {
      const nameErr = validateField('name', formData.name);
      if (nameErr) newErrors.name = nameErr;
      
      const confirmErr = validateField('confirmPassword', formData.confirmPassword);
      if (confirmErr) newErrors.confirmPassword = confirmErr;

      const termsErr = validateField('agreeTerms', formData.agreeTerms);
      if (termsErr) newErrors.agreeTerms = termsErr;
    }

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const passErr = validateField('password', formData.password);
    if (passErr) newErrors.password = passErr;

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate everything
    const newErrors = validateForm();
    
    // Mark all fields as touched
    const allTouched = {
      email: true,
      password: true
    };
    if (mode === 'signup') {
      allTouched.name = true;
      allTouched.confirmPassword = true;
      allTouched.agreeTerms = true;
    }
    setTouched(allTouched);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process valid form
    setIsLoading(true);
    
    // Simulate server side authentication delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      
      const successMsg = mode === 'login' 
        ? `Welcome back, ${formData.email.split('@')[0]}!`
        : 'Account created successfully!';
        
      setToast({ show: true, message: successMsg });

      // After a short success animation pause, log user in
      setTimeout(() => {
        setIsLoggedIn(true);
        if (onLoginSuccess) {
          onLoginSuccess(formData.email.split('@')[0]);
        }
      }, 1000);
    }, 1800);
  };



  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      rememberMe: false,
      agreeTerms: false
    });
    setTouched({});
    setErrors({});
    setToast({ show: true, message: 'Logged out successfully.' });
  };

  if (isLoggedIn) {
    return (
      <div className="dashboard-root" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#080c14',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        color: '#f8fafc',
        padding: '2rem',
        background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%), #080c14'
      }}>
        <div style={{
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          padding: '3rem',
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5)'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '64px',
            height: '64px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            borderRadius: '20px',
            color: 'white',
            marginBottom: '1.5rem',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)'
          }}>
            <Icons.Check />
          </div>
          
          <h1 style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            margin: '0 0 0.5rem 0',
            letterSpacing: '-1px'
          }}>Access Granted</h1>
          
          <p style={{
            color: '#94a3b8',
            marginBottom: '2rem',
            fontSize: '1rem'
          }}>
            Authenticated as <strong style={{ color: '#e2e8f0' }}>{formData.email}</strong>
          </p>



          <button 
            onClick={handleLogout}
            style={{
              width: '100%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              padding: '0.875rem',
              color: '#f8fafc',
              fontSize: '0.938rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            Sign Out
          </button>
        </div>

        {/* Success Toast */}
        <div className={`toast ${toast.show ? 'show' : ''}`} style={{ backgroundColor: '#10b981' }}>
          <Icons.Check />
          <span>{toast.message}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      {/* Toast Alert */}
      {/* Toast Alert */}
      <div className={`toast ${toast.show ? 'show' : ''}`} style={{ backgroundColor: '#10b981' }}>
        <Icons.Check />
        <span>{toast.message}</span>
      </div>

      {/* Left panel - Branding and marketing */}
      <div className="branding-side">
        <div className="brand-header">
          <div className="brand-logo">
            <Icons.Logo />
          </div>
          <span className="brand-name">FixNow</span>
        </div>

        <div className="brand-showcase">
          <div className="brand-badge">
            <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: '#818cf8', borderRadius: '50%', marginRight: '8px' }}></span>
            Home Service Marketplace
          </div>
          <h1 className="brand-title">
            Home services, <span>made simple</span>.
          </h1>
          
          <div className="illustration-wrapper" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <img src={illustrationImg} alt="FixNow Illustration" style={{ maxWidth: '100%', height: 'auto', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
          </div>
        </div>

        <div className="brand-footer">
          &copy; {new Date().getFullYear()} FixNow Inc. All rights reserved.
        </div>
      </div>

      {/* Right panel - Auth Forms */}
      <div className="form-side">
        <div className="form-container">
          <div className="form-header">
            <h2 className="form-title">
              {mode === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="form-subtitle">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button 
                type="button" 
                className="toggle-mode-btn" 
                onClick={toggleMode}
                disabled={isLoading}
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>



          {/* Core Form */}
          <form className={`auth-form mode-${mode}`} onSubmit={handleSubmit} noValidate>
            
            {/* NAME FIELD */}
            <div className={`form-group animated-field show-signup ${touched.name ? (errors.name ? 'has-error' : 'is-valid') : ''}`}>
              <label className="input-label" htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your name"
                  className="form-input"
                  disabled={isLoading}
                  autoComplete="name"
                />
                <div className="input-icon-left">
                  <Icons.User />
                </div>
              </div>
              {touched.name && errors.name && (
                <span className="error-message">
                  <Icons.AlertCircle />
                  {errors.name}
                </span>
              )}
            </div>

            {/* EMAIL FIELD */}
            <div className={`form-group ${touched.email ? (errors.email ? 'has-error' : 'is-valid') : ''}`}>
              <label className="input-label" htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="name@company.com"
                  className="form-input"
                  disabled={isLoading}
                  autoComplete="email"
                />
                <div className="input-icon-left">
                  <Icons.Mail />
                </div>
              </div>
              {touched.email && errors.email && (
                <span className="error-message">
                  <Icons.AlertCircle />
                  {errors.email}
                </span>
              )}
            </div>

            {/* PASSWORD FIELD */}
            <div className={`form-group ${touched.password ? (errors.password ? 'has-error' : 'is-valid') : ''}`}>
              <label className="input-label" htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder={mode === 'login' ? '••••••••' : 'Minimum 8 characters'}
                  className="form-input"
                  disabled={isLoading}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                />
                <div className="input-icon-left">
                  <Icons.Lock />
                </div>
                <button
                  type="button"
                  className="input-action-btn"
                  onClick={() => setShowPassword(prev => !prev)}
                  tabIndex="-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                </button>
              </div>
              {touched.password && errors.password && (
                <span className="error-message">
                  <Icons.AlertCircle />
                  {errors.password}
                </span>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className={`form-group animated-field show-signup ${touched.confirmPassword ? (errors.confirmPassword ? 'has-error' : 'is-valid') : ''}`}>
              <label className="input-label" htmlFor="confirmPassword">Confirm Password</label>
              <div className="input-wrapper">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="••••••••"
                  className="form-input"
                  disabled={isLoading}
                  autoComplete="new-password"
                />
                <div className="input-icon-left">
                  <Icons.Lock />
                </div>
                <button
                  type="button"
                  className="input-action-btn"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  tabIndex="-1"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? <Icons.EyeOff /> : <Icons.Eye />}
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword && (
                <span className="error-message">
                  <Icons.AlertCircle />
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            {/* Remember Me & Forgot Password (Login) */}
            <div className="animated-field show-login">
              <div className="form-actions">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <div className="custom-checkbox">
                    <div className="checkmark">
                      <Icons.Check />
                    </div>
                  </div>
                  <span>Remember me</span>
                </label>
                <a href="#forgot" className="forgot-password-link" onClick={(e) => { e.preventDefault(); setToast({ show: true, message: 'Password reset link sent to your email.' }); }}>
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Terms and Conditions (Signup) */}
            <div className={`animated-field show-signup form-group ${touched.agreeTerms && errors.agreeTerms ? 'has-error' : ''}`}>
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isLoading}
                />
                <div className="custom-checkbox">
                  <div className="checkmark">
                    <Icons.Check />
                  </div>
                </div>
                <span className="terms-text">
                  I agree to the <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a> and <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>.
                </span>
              </label>
              {touched.agreeTerms && errors.agreeTerms && (
                <span className="error-message" style={{ marginTop: '0.5rem' }}>
                  <Icons.AlertCircle />
                  {errors.agreeTerms}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isLoading || isSuccess}
            >
              {isLoading ? (
                <div className="spinner"></div>
              ) : isSuccess ? (
                <div className="success-checkmark">
                  <Icons.Check />
                </div>
              ) : (
                <span>{mode === 'login' ? 'Sign In to FixNow' : 'Create FixNow Account'}</span>
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
