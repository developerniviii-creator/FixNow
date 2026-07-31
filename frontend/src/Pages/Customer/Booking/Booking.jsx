import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from '../../../Components/Customer/Header/CustomerHeader';
import CustomerFooter from '../../../Components/Customer/Footer/CustomerFooter';
import './Booking.css';

const IconSparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"></path>
  </svg>
);

const IconArrowLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>
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

const IconThumbsUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
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
const emojiOptions = ['😄', '🙂', '🤩', '✨', '💙'];


export default function Booking({ navigateToHome, selectedService, activeBookings }) {
  const navigate = useNavigate();
  const [currentCity, setCurrentCity] = useState('Chennai');
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedStars, setSelectedStars] = useState(5);
  const [selectedTags, setSelectedTags] = useState(['Fast', 'Polite']);
  const [selectedEmoji, setSelectedEmoji] = useState('🤩');
  const [reviewText, setReviewText] = useState('The technician was punctual, polished, and cleared the issue quickly.');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submissionState, setSubmissionState] = useState('idle');
  const [reviewFilter, setReviewFilter] = useState('All');

  const defaultBooking = {
    id: 'SERV-94821',
    serviceName: selectedService || 'AC Repair & Service',
    customerName: 'Velkumar',
    mobileNumber: '+91 98765 43210',
    address: 'Flat 402 • Skyline Paradise • Anna Nagar',
    preferredVisitTime: 'Today • 04:00 PM - 06:00 PM',
    issue: 'AC unit blowing warm air and making clicking noise',
    status: 'Technician on the way',
    progressStep: 2,
    progressText: 'Arrives in 12 min',
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

  const closeModal = () => {
    setShowRatingModal(false);
    setSubmissionState('idle');
    setSelectedStars(5);
    setSelectedTags(['Fast', 'Polite']);
    setSelectedEmoji('🤩');
    setReviewText('The technician was punctual, polished, and cleared the issue quickly.');
    setUploadedFiles([]);
  };


  return (
    <div className="booking-page-container">
      <CustomerHeader
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        activeBookingsCount={activeBookings?.length || 1}
        onOpenBookings={() => navigate('/booking')}
        onBookService={() => navigate('/need-service')}
        isLoggedIn={false}
        onLoginClick={() => {}}
        onLogout={() => {}}
        onNavigateToHome={navigateToHome}
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
              <div className="panel-heading">
                <div>
                  <p className="panel-label">Active booking</p>
                  <h2>{currentBooking.serviceName}</h2>
                </div>
                <button type="button" className="ghost-btn glow-btn" onClick={() => setShowRatingModal(true)}>
                  ★ Rate experience
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
              <button type="button" className="ghost-btn" onClick={() => navigate('/mybookings')}>
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

      {/* ── Rating Modal ── */}
      {showRatingModal && (
        <div className="rating-modal-backdrop" onClick={closeModal}>
          <div className="rating-modal" onClick={(event) => event.stopPropagation()}>
            {submissionState === 'success' ? (
              <div className="rating-success">
                <div className="success-badge">
                  <IconCheck />
                </div>
                <h3>Review sent beautifully</h3>
                <p>Your feedback is live and helps us keep the FixNow experience exceptional.</p>
                <button type="button" className="submit-btn" onClick={closeModal}>Close</button>
              </div>
            ) : (
              <form onSubmit={submitReview}>
                <div className="modal-heading">
                  <div>
                    <p className="panel-label">Share your experience</p>
                    <h3>How was your technician visit?</h3>
                  </div>
                  <button type="button" className="icon-close" onClick={closeModal}>×</button>
                </div>

                <div className="star-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className={`star-btn ${selectedStars >= star ? 'active' : ''}`} onClick={() => setSelectedStars(star)}>
                      <IconStar filled={selectedStars >= star} />
                    </button>
                  ))}
                  <span className="star-label">{selectedStars === 5 ? 'Exceptional!' : selectedStars === 4 ? 'Great!' : selectedStars === 3 ? 'Good' : selectedStars === 2 ? 'Fair' : 'Poor'}</span>
                </div>

                <div className="emoji-row">
                  {emojiOptions.map((emoji) => (
                    <button key={emoji} type="button" className={`emoji-btn ${selectedEmoji === emoji ? 'active' : ''}`} onClick={() => setSelectedEmoji(emoji)}>
                      {emoji}
                    </button>
                  ))}
                </div>

                <div className="tag-row">
                  {reviewTags.map((tag) => (
                    <button key={tag} type="button" className={`tag-chip ${selectedTags.includes(tag) ? 'active' : ''}`} onClick={() => toggleTag(tag)}>
                      {tag}
                    </button>
                  ))}
                </div>

                <textarea
                  value={reviewText}
                  onChange={(event) => setReviewText(event.target.value)}
                  placeholder="Tell us what stood out..."
                />

                <label className="upload-box">
                  <input type="file" accept="image/*,video/*" multiple onChange={handleUpload} />
                  <span>📸 Add photos or short clips</span>
                  {uploadedFiles.length > 0 && <small>{uploadedFiles.join(', ')}</small>}
                </label>

                <button type="submit" className="submit-btn">
                  {submissionState === 'submitting' ? 'Sending...' : 'Send review'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <CustomerFooter />
    </div>
  );
}
