import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Star,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Zap,
  CheckCircle2,
  Navigation,
  Sparkles,
  Radio,
  Send,
  Award,
  ChevronRight,
  UserCheck,
  ArrowLeft
} from 'lucide-react';
import CustomerHeader from '../../../Components/Customer/Header/CustomerHeader';
import CustomerFooter from '../../../Components/Customer/Footer/CustomerFooter';
import './connect.css';

/* ── Realistic Worker Data with Unsplash Avatar Images ── */
const WORKERS = [
  {
    id: 'w1',
    name: 'Rajesh Kumar',
    role: 'Master Plumbing Specialist',
    rating: 4.9,
    jobsCompleted: 340,
    experience: '8 Years Exp',
    phone: '+91 98401 23456',
    image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    location: 'Anna Nagar, Chennai • 1.8 km away',
    eta: '18 mins',
    specialty: 'High-pressure pipe leakages, bathroom fittings & drainage systems',
    badge: 'Top Verified Pro',
    status: 'Available Now'
  },
  {
    id: 'w2',
    name: 'Suresh Varma',
    role: 'Senior Electrical Engineer',
    rating: 4.8,
    jobsCompleted: 215,
    experience: '6 Years Exp',
    phone: '+91 97890 12345',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    location: 'T. Nagar, Chennai • 3.2 km away',
    eta: '25 mins',
    specialty: 'Smart DB panel setup, short-circuit diagnostics & ceiling fan fixtures',
    badge: 'FixNow Shield Certified',
    status: 'Available Now'
  },
  {
    id: 'w3',
    name: 'Karthik Raja',
    rating: 4.95,
    role: 'HVAC & AC Service Master',
    jobsCompleted: 480,
    experience: '10 Years Exp',
    phone: '+91 99402 87654',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    location: 'Adyar, Chennai • 2.5 km away',
    eta: '20 mins',
    specialty: 'Anti-bacterial jet foam wash, Freon gas top-up & inverter AC repair',
    badge: 'Top Rated 2026',
    status: 'On Duty'
  },
  {
    id: 'w4',
    name: 'Manoj Sharma',
    role: 'Deep Cleaning & Sanitization Expert',
    rating: 4.7,
    jobsCompleted: 190,
    experience: '5 Years Exp',
    phone: '+91 98840 54321',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80',
    location: 'Velachery, Chennai • 4.1 km away',
    eta: '30 mins',
    specialty: '3BHK complete home sanitization, sofa shampooing & chimney degreasing',
    badge: 'FixNow Verified',
    status: 'Available Now'
  },
];

export default function Connect({ navigateToHome }) {
  const [currentCity, setCurrentCity] = useState('Chennai');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeWorker, setActiveWorker] = useState(WORKERS[0]);
  const [assignedWorkerId, setAssignedWorkerId] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4500);
  };

  const handleAssignWorker = (worker) => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setAssignedWorkerId(worker.id);
      setActiveWorker(worker);
      triggerToast(`⚡ Dispatch Message Sent to ${worker.name}! Worker assigned successfully.`);
    }, 1200);
  };

  return (
    <div className="connect-page-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <Sparkles className="toast-icon" size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      <CustomerHeader
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        activeBookingsCount={assignedWorkerId ? 1 : 0}
        onOpenBookings={navigateToHome}
        onBookService={navigateToHome}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoggedIn(true)}
        onLogout={() => { setIsLoggedIn(false); triggerToast('👋 Signed out.'); }}
        onNavigateToHome={navigateToHome}
      />

      {/* Hero Interactive Command Header */}
      <section className="connect-command-hero">
        <div className="hero-top-nav-row">
          <button type="button" className="btn-back-global" onClick={navigateToHome}>
            <ArrowLeft size={16} /> Back to Home
          </button>
          <div className="live-radar-badge">
            <Radio size={14} className="radar-pulse" /> Live Radar: 14 Professionals Active in {currentCity}
          </div>
        </div>
        <h1 className="hero-title">Futuristic Worker Dispatch Console</h1>
        <p className="hero-subtitle">
          Select a certified home specialist to view real-time GPS proximity, profile stats, and trigger instant assignment.
        </p>
      </section>

      {/* Futuristic Split View Screen */}
      <main className="connect-workspace">

        {/* LEFT STREAM PANEL: Interactive Worker Selector List */}
        <section className="workers-stream-panel">
          <div className="panel-header-title">
            <UserCheck size={18} />
            <h2>Available Technicians</h2>
            <span className="live-count-pill">{WORKERS.length} Matches</span>
          </div>

          <div className="workers-list-stream">
            {WORKERS.map((worker) => {
              const isSelected = activeWorker.id === worker.id;
              const isAssigned = assignedWorkerId === worker.id;

              return (
                <div
                  key={worker.id}
                  className={`stream-worker-item ${isSelected ? 'is-selected' : ''} ${isAssigned ? 'is-assigned' : ''}`}
                  onClick={() => setActiveWorker(worker)}
                >
                  <div className="stream-avatar-wrap">
                    <img src={worker.image} alt={worker.name} className="stream-avatar-img" />
                    {isAssigned ? (
                      <span className="assigned-status-dot"><CheckCircle2 size={12} /></span>
                    ) : (
                      <span className="live-status-dot" />
                    )}
                  </div>

                  <div className="stream-meta">
                    <div className="stream-name-row">
                      <span className="stream-name">{worker.name}</span>
                      <span className="stream-rating"><Star size={12} fill="#fbbf24" color="#fbbf24" /> {worker.rating}</span>
                    </div>
                    <span className="stream-role">{worker.role}</span>
                    <span className="stream-eta"><Clock size={11} /> ETA: {worker.eta} • {worker.location}</span>
                  </div>

                  <ChevronRight size={18} className="stream-arrow" />
                </div>
              );
            })}
          </div>
        </section>

        {/* RIGHT COMMAND DISPLAY: Detailed Interactive Profile & Radar Map */}
        <section className="worker-detail-console">
          
          {/* Main Hero Header within Console */}
          <div className="console-profile-header">
            <div className="console-avatar-stage">
              <img src={activeWorker.image} alt={activeWorker.name} className="console-avatar-img" />
              <span className="console-badge"><ShieldCheck size={13} /> {activeWorker.badge}</span>
            </div>

            <div className="console-info">
              <div className="console-title-row">
                <h3>{activeWorker.name}</h3>
                <span className="status-pill-active">{activeWorker.status}</span>
              </div>
              <p className="console-role">{activeWorker.role}</p>
              
              <div className="console-stats-bar">
                <div className="stat-item">
                  <Star size={14} fill="#fbbf24" color="#fbbf24" />
                  <strong>{activeWorker.rating}</strong> Rating
                </div>
                <div className="stat-item">
                  <Award size={14} />
                  <strong>{activeWorker.jobsCompleted}+</strong> Bookings Done
                </div>
                <div className="stat-item">
                  <Clock size={14} />
                  <strong>{activeWorker.experience}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Specialty & Coverage */}
          <div className="console-section">
            <h4 className="console-label"><Zap size={14} /> Service Specialty</h4>
            <p className="console-text">{activeWorker.specialty}</p>
          </div>

          {/* Interactive Futuristic Map Visual */}
          <div className="console-map-box">
            <div className="radar-grid-bg" />
            <div className="map-live-tag">
              <Navigation size={13} className="nav-spin" /> Live Target Pin: {activeWorker.location}
            </div>
            
            <div className="map-center-pulse">
              <img src={activeWorker.image} alt={activeWorker.name} className="map-avatar-mini" />
              <div className="radar-ring" />
            </div>

            <div className="map-bottom-bar">
              <span>Estimated Arrival Time: <strong>{activeWorker.eta}</strong></span>
              <span className="map-gps-coords">GPS: 13.0827° N, 80.2707° E</span>
            </div>
          </div>

          {/* Action Console Bar: Assign & Message Button */}
          <div className="console-action-bar">
            {assignedWorkerId === activeWorker.id ? (
              <div className="assigned-confirmation-box">
                {/* Worker Full Detail Card */}
                <div className="worker-detail-card-expanded">
                  <div className="detail-card-header">
                    <img src={activeWorker.image} alt={activeWorker.name} className="detail-card-avatar" />
                    <div className="detail-card-info">
                      <h4>{activeWorker.name}</h4>
                      <p className="detail-card-role">{activeWorker.role}</p>
                      <div className="detail-card-badges">
                        <span className="detail-badge-verified"><ShieldCheck size={12} /> {activeWorker.badge}</span>
                        <span className="detail-badge-rating"><Star size={12} fill="#fbbf24" color="#fbbf24" /> {activeWorker.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-card-stats-row">
                    <div className="detail-stat">
                      <Award size={16} />
                      <div>
                        <strong>{activeWorker.jobsCompleted}+</strong>
                        <span>Jobs Done</span>
                      </div>
                    </div>
                    <div className="detail-stat">
                      <Clock size={16} />
                      <div>
                        <strong>{activeWorker.experience}</strong>
                        <span>Experience</span>
                      </div>
                    </div>
                    <div className="detail-stat">
                      <MapPin size={16} />
                      <div>
                        <strong>ETA {activeWorker.eta}</strong>
                        <span>Arrival</span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-card-contact">
                    <div className="contact-row">
                      <Phone size={15} />
                      <span>Direct Contact: <strong>{activeWorker.phone}</strong></span>
                    </div>
                    <div className="contact-row">
                      <MapPin size={15} />
                      <span>Location: <strong>{activeWorker.location}</strong></span>
                    </div>
                    <div className="contact-row">
                      <Zap size={15} />
                      <span>Specialty: <strong>{activeWorker.specialty}</strong></span>
                    </div>
                  </div>

                  <div className="detail-card-actions">
                    <a href={`tel:${activeWorker.phone}`} className="btn-detail-call">
                      <Phone size={16} /> Call Now
                    </a>
                    <a href={`https://wa.me/${activeWorker.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="btn-detail-whatsapp">
                      <MessageSquare size={16} /> WhatsApp
                    </a>
                  </div>
                </div>

                {/* Dispatch Confirmation */}
                <div className="confirmed-row">
                  <CheckCircle2 size={20} color="#34d399" />
                  <div>
                    <h4>Specialist Assigned & Dispatched</h4>
                    <p>Direct Phone Contact: <strong>{activeWorker.phone}</strong></p>
                  </div>
                </div>
                <div className="sent-message-bubble">
                  <Send size={14} />
                  <span>Dispatch Notification sent to {activeWorker.name}. Specialist is en route.</span>
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="btn-console-assign"
                onClick={() => handleAssignWorker(activeWorker)}
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <Radio size={18} className="radar-pulse" /> Assigning Specialist...
                  </>
                ) : (
                  <>
                    <MessageSquare size={18} /> Assign & Send Message to {activeWorker.name}
                  </>
                )}
              </button>
            )}
          </div>

        </section>

      </main>

      <CustomerFooter />
    </div>
  );
}
