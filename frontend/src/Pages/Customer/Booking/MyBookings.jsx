import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from '../../../Components/Customer/Header/CustomerHeader';
import CustomerFooter from '../../../Components/Customer/Footer/CustomerFooter';
import './mybookings.css';

const IconSparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"></path>
  </svg>
);

const IconCheck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"></path>
  </svg>
);

const IconStar = ({ filled = false }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.1 6.3L22 9.2l-5 4.9 1.2 6.9L12 18.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z"></path>
  </svg>
);

const IconShield = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconMessageCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const reviewTags = ['Fast', 'Polite', 'Clean', 'Fair pricing', 'On time', 'Friendly'];

export default function MyBookings({ activeBookings, setActiveBookings }) {
  const navigate = useNavigate();
  const [currentCity, setCurrentCity] = useState('Chennai');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedStars, setSelectedStars] = useState(5);
  const [selectedTags, setSelectedTags] = useState(['Fast', 'Polite']);
  const [reviewText, setReviewText] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submissionState, setSubmissionState] = useState('idle');

  // Hardcode a default booking to ensure UI works even if none passed
  const defaultBooking = {
    id: 'SERV-94821',
    serviceName: 'AC Repair & Service',
    customerName: 'Velkumar',
    mobileNumber: '+91 98765 43210',
    address: 'Flat 402 • Skyline Paradise • Anna Nagar',
    preferredVisitTime: 'Today • 04:00 PM - 06:00 PM',
    issue: 'AC unit blowing warm air and making clicking noise',
    status: 'Completed',
    progressStep: 4,
    progressText: 'Finished today at 05:10 PM',
    technician: {
      name: 'Arun Kumar',
      role: 'HVAC Specialist',
      rating: '4.9',
      phone: '+91 98401 22334',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80'
    }
  };

  const currentBooking = activeBookings?.[0] || defaultBooking;

  const bookingHistory = [
    {
      title: 'Home Deep Cleaning',
      time: 'Yesterday • 11:30 AM',
      note: 'Spotless finish and attentive team',
      tag: 'Completed',
      rating: 5
    },
    {
      title: 'Plumbing Fix',
      time: 'Mon • 8:15 PM',
      note: 'Leak resolved in under 30 mins',
      tag: 'Rated',
      rating: 5
    },
    {
      title: 'Electrical Wiring',
      time: 'Last Week • 10:00 AM',
      note: 'Panel upgrade done professionally',
      tag: 'Completed',
      rating: 4
    }
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  };

  const handleUpload = (event) => {
    const files = Array.from(event.target.files || []).slice(0, 3);
    setUploadedFiles(files.map((file) => file.name));
  };

  const submitReview = (event) => {
    event.preventDefault();
    setSubmissionState('submitting');
    window.setTimeout(() => {
      setSubmissionState('success');
    }, 900);
  };

  return (
    <div className="mybookings-page-container">
      <CustomerHeader
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        activeBookingsCount={activeBookings?.length || 1}
        onOpenBookings={() => navigate('/mybookings')}
        onBookService={() => navigate('/booking')}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        onNavigateToHome={() => navigate('/')}
      />

      <main className="booking-content">
        <section className="booking-shell">
          {/* ── Enhanced Hero Card ── */}
          <div className="booking-hero-card">
            <div>
              <div className="eyebrow-row">
                <span className="eyebrow-pill"><IconSparkles /> FixNow • Premium Experience</span>
                <span className="eyebrow-pill subtle"><IconClock /> Live tracking</span>
              </div>
              <h1>My bookings, reimagined for <span className="hero-gradient-text">calm confidence.</span></h1>
              <p>Every appointment feels premium, transparent, and beautifully in sync with your day.</p>
            </div>
            <div className="hero-metrics">
              <div className="hero-metric-card">
                <div className="metric-icon-wrap accent-purple">★</div>
                <strong>4.9/5</strong>
                <span>Service rating</span>
              </div>
              <div className="hero-metric-card">
                <div className="metric-icon-wrap accent-blue"><IconClock /></div>
                <strong>12 min</strong>
                <span>Average arrival</span>
              </div>
              <div className="hero-metric-card">
                <div className="metric-icon-wrap accent-green"><IconShield /></div>
                <strong>3,000+</strong>
                <span>Happy customers</span>
              </div>
            </div>
          </div>

          {/* ── Main Content Grid ── */}
          <div className="booking-panels-grid">
            <article className="booking-panel booking-panel-main">
              {currentBooking.progressStep === 4 ? (
                // ── COMPLETED STATE: INLINE RATING ──
                <div className="completed-state-view">
                  <div className="panel-heading">
                    <div>
                      <p className="panel-label">Service Completed</p>
                      <h2>{currentBooking.serviceName}</h2>
                    </div>
                    <span className="verified-badge done-badge"><IconCheck /> Finished</span>
                  </div>

                  <div className="technician-card enhanced compact">
                    <div className="tech-avatar-wrap">
                      <img src={currentBooking.technician.image} alt={currentBooking.technician.name} />
                    </div>
                    <div className="tech-info-block">
                      <div className="technician-name-row">
                        <h3>{currentBooking.technician.name}</h3>
                        <span className="rating-pill">★ {currentBooking.technician.rating}</span>
                      </div>
                      <p>Completed your {currentBooking.serviceName}</p>
                    </div>
                  </div>

                  <div className="inline-rating-box">
                    {submissionState === 'success' ? (
                      <div className="rating-success inline">
                        <div className="success-badge"><IconCheck /></div>
                        <h3>Review published!</h3>
                        <p>Thank you for helping us keep FixNow exceptional.</p>
                      </div>
                    ) : (
                      <form onSubmit={submitReview}>
                        <div className="inline-rating-header">
                          <h3>How did {currentBooking.technician.name} do?</h3>
                          <p>Your feedback helps us reward great professionals.</p>
                        </div>

                        <div className="star-row inline">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" className={`star-btn ${selectedStars >= star ? 'active' : ''}`} onClick={() => setSelectedStars(star)}>
                              <IconStar filled={selectedStars >= star} />
                            </button>
                          ))}
                          <span className="star-label">{selectedStars === 5 ? 'Exceptional!' : selectedStars === 4 ? 'Great!' : selectedStars === 3 ? 'Good' : selectedStars === 2 ? 'Fair' : 'Poor'}</span>
                        </div>

                        <div className="tag-row inline">
                          {reviewTags.map((tag) => (
                            <button key={tag} type="button" className={`tag-chip ${selectedTags.includes(tag) ? 'active' : ''}`} onClick={() => toggleTag(tag)}>
                              {tag}
                            </button>
                          ))}
                        </div>

                        <textarea
                          className="inline-textarea"
                          value={reviewText}
                          onChange={(event) => setReviewText(event.target.value)}
                          placeholder="Write your review here..."
                        />

                        <div className="inline-rating-footer">
                          <label className="upload-box mini">
                            <input type="file" accept="image/*,video/*" multiple onChange={handleUpload} />
                            <span>📸 Add photos</span>
                          </label>
                          <button type="submit" className="submit-btn inline-btn">
                            {submissionState === 'submitting' ? 'Sending...' : 'Submit Review'}
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                // ── ACTIVE STATE: TRACKER ──
                <div>
                  <div className="panel-heading">
                    <div>
                      <p className="panel-label">Active booking</p>
                      <h2>{currentBooking.serviceName}</h2>
                    </div>
                    {/* Demo button to toggle completion state */}
                    <button type="button" className="ghost-btn glow-btn" onClick={() => {
                      currentBooking.progressStep = 4;
                      currentBooking.status = 'Completed';
                      setSubmissionState('idle'); 
                    }}>
                      <IconCheck /> Mark Completed
                    </button>
                  </div>

                  {/* Progress Card */}
                  <div className="progress-card">
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${currentBooking.progressStep * 33}%` }} />
                    </div>
                    <div className="progress-steps">
                      {['Booked', 'Confirmed', 'On the way', 'Completed'].map((step, index) => (
                        <span key={step} className={`progress-step ${index <= currentBooking.progressStep ? 'active' : ''}`}>
                          {index <= currentBooking.progressStep && <span className="step-check">✓</span>}
                          {step}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Technician Card */}
                  <div className="technician-card enhanced">
                    <div className="tech-avatar-wrap">
                      <img src={currentBooking.technician.image} alt={currentBooking.technician.name} />
                      <span className="tech-online-dot" />
                    </div>
                    <div className="tech-info-block">
                      <div className="technician-name-row">
                        <h3>{currentBooking.technician.name}</h3>
                        <span className="rating-pill">★ {currentBooking.technician.rating}</span>
                        <span className="verified-badge"><IconShield /> Verified</span>
                      </div>
                      <p>{currentBooking.technician.role}</p>
                      <div className="detail-row">
                        <span><IconClock /> {currentBooking.preferredVisitTime}</span>
                        <span className="eta-highlight">🚀 {currentBooking.progressText}</span>
                      </div>
                      <div className="tech-action-btns">
                        <a href={`tel:${currentBooking.technician?.phone || ''}`} className="tech-mini-btn call">
                          <IconPhone /> Call
                        </a>
                        <button className="tech-mini-btn msg">
                          <IconMessageCircle /> Message
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="booking-details-grid">
                    <div className="detail-block">
                      <p className="panel-label">🔧 Issue reported</p>
                      <p>{currentBooking.issue}</p>
                    </div>
                    <div className="detail-block">
                      <p className="panel-label">📍 Service location</p>
                      <p>{currentBooking.address}</p>
                    </div>
                  </div>
                </div>
              )}
            </article>

            {/* ── Side Panel: Timeline ── */}
            <aside className="booking-panel booking-panel-side">
              <div className="panel-heading compact">
                <div>
                  <p className="panel-label">Booking timeline</p>
                  <h2>Journey status</h2>
                </div>
                <button type="button" className="ghost-btn alt" onClick={() => navigate('/connect')}>
                  Need help
                </button>
              </div>

              <div className="timeline-list">
                {[
                  { title: 'Service confirmed', time: '03:10 PM', state: 'done', icon: '✓' },
                  { title: 'Technician assigned', time: '03:35 PM', state: 'done', icon: '✓' },
                  { title: 'On the way', time: '04:00 PM', state: 'active', icon: '🚗' },
                  { title: 'Service completed', time: 'Pending', state: 'pending', icon: '⏳' }
                ].map((item) => (
                  <div key={item.title} className={`timeline-item ${item.state}`}>
                    <span className="timeline-dot">{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Trust Stats */}
              <div className="trust-stats-mini">
                <div className="trust-stat">
                  <span className="trust-num">98%</span>
                  <span className="trust-label">On-time</span>
                </div>
                <div className="trust-stat">
                  <span className="trust-num">4.9★</span>
                  <span className="trust-label">Avg Rating</span>
                </div>
                <div className="trust-stat">
                  <span className="trust-num">30-Day</span>
                  <span className="trust-label">Warranty</span>
                </div>
              </div>
            </aside>
          </div>

          {/* ── Enhanced History Section ── */}
          <section className="history-card">
            <div className="panel-heading compact">
              <div>
                <p className="panel-label">History</p>
                <h2>Recent visits</h2>
              </div>
              <button type="button" className="ghost-btn" onClick={() => {}}>
                View all
              </button>
            </div>

            <div className="history-list">
              {bookingHistory.map((item) => (
                <div key={item.title} className="history-item">
                  <div className="history-item-content">
                    <strong>{item.title}</strong>
                    <p>{item.note}</p>
                    <div className="history-item-meta">
                      <span>{item.time}</span>
                      <span className="history-rating-mini">
                        {[1, 2, 3, 4, 5].map(s => (
                          <span key={s} className={`mini-star ${s <= item.rating ? 'filled' : ''}`}>★</span>
                        ))}
                      </span>
                    </div>
                  </div>
                  <div className="history-badge">{item.tag}</div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </main>

      <CustomerFooter />
    </div>
  );
}
