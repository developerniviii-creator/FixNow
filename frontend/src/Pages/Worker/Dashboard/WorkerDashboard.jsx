import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkerDashboard.css';
import { FiBell, FiSearch, FiMapPin, FiBriefcase, FiStar, FiClock, FiCheck, FiX } from 'react-icons/fi';
import { FaUserCircle, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import WorkerHeader from '../../../Components/Worker/Header/WorkerHeader';
import WorkerFooter from '../../../Components/Worker/Footer/WorkerFooter';

const WorkerDashboard = () => {
  const navigate = useNavigate();
  const [isOnline, setIsOnline] = useState(true);
  const [currentDateTime, setCurrentDateTime] = useState('');
  
  // Reject Modal State
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedRejectReason, setSelectedRejectReason] = useState('');
  const [otherReason, setOtherReason] = useState('');
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(null);

  // Mock Data
  const [assignments, setAssignments] = useState([
    {
      id: 'A-101',
      customerName: 'Sarah Jenkins',
      serviceType: 'Electrical Repair',
      address: '452 Sunset Boulevard, Appt 4B',
      issue: 'Ceiling fan is making a loud buzzing noise and sparks occasionally.',
      bookingTime: 'Today, 2:30 PM',
      priority: 'High',
      distance: '2.5 km',
      status: 'pending',
      image: 'https://i.pravatar.cc/150?u=sarah'
    },
    {
      id: 'A-102',
      customerName: 'Michael Chang',
      serviceType: 'Wiring Installation',
      address: '1024 Silicon Avenue, Tech Park',
      issue: 'Need new power outlets installed in the home office.',
      bookingTime: 'Tomorrow, 10:00 AM',
      priority: 'Medium',
      distance: '5.1 km',
      status: 'pending',
      image: 'https://i.pravatar.cc/150?u=michael'
    }
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      setCurrentDateTime(now.toLocaleDateString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleOnlineToggle = () => {
    setIsOnline(!isOnline);
  };

  const handleAccept = (id) => {
    setAssignments(assignments.map(a => a.id === id ? { ...a, status: 'accepted' } : a));
  };

  const openRejectModal = (id) => {
    setSelectedAssignmentId(id);
    setShowRejectModal(true);
    setSelectedRejectReason('');
    setOtherReason('');
  };

  const closeRejectModal = () => {
    setShowRejectModal(false);
    setSelectedAssignmentId(null);
  };

  const submitReject = () => {
    if (selectedRejectReason) {
      setAssignments(assignments.map(a => a.id === selectedAssignmentId ? { ...a, status: 'rejected' } : a));
      closeRejectModal();
    }
  };

  const rejectReasons = [
    "Busy with another work",
    "Too far from location",
    "Personal emergency",
    "Outside working hours",
    "Vehicle issue",
    "Other"
  ];

  return (
    <div className="worker-dashboard-container">
      {/* Navigation Bar */}
      <WorkerHeader />

      <main className="wd-main-content">
        {/* Header Section */}
        <section className="wd-header">
          <div className="wd-welcome">
            <h2>Welcome Back, John!</h2>
            <p>{currentDateTime}</p>
          </div>
          <div className="wd-search-bar">
            <FiSearch size={20} color="var(--wd-text-secondary)" />
            <input type="text" placeholder="Search assignments..." />
          </div>
        </section>

        {/* Worker Profile Card - Zomato/Swiggy Style */}
        <section className="wd-profile-card">
          <div className="wd-profile-header">
            <div className="wd-profile-user">
              <img src="https://i.pravatar.cc/150?u=john-worker" alt="Worker Profile" className="wd-profile-image" />
              <div className="wd-profile-info">
                <h3>John Doe</h3>
                <div className="wd-role">Senior Electrician</div>
                <div className="wd-location"><FiMapPin /> Downtown Area</div>
              </div>
            </div>
            <div className="wd-status-toggle">
              <label className="wd-switch">
                <input type="checkbox" checked={isOnline} onChange={handleOnlineToggle} />
                <span className="wd-slider"></span>
              </label>
              <div className={`wd-status-badge ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? 'Online' : 'Offline'}
              </div>
            </div>
          </div>

          <div className="wd-profile-metrics">
            <div className="wd-metric">
              <span className="wd-metric-value">
                <FiStar fill="currentColor" color="var(--wd-warning)" /> 4.8
              </span>
              <span className="wd-metric-label">124 Reviews</span>
            </div>
            <div className="wd-metric-divider"></div>
            <div className="wd-metric">
              <span className="wd-metric-value">12</span>
              <span className="wd-metric-label">Jobs Today</span>
            </div>
            <div className="wd-metric-divider"></div>
            <div className="wd-metric">
              <span className="wd-metric-value">₹ 2,450</span>
              <span className="wd-metric-label">Earned Today</span>
            </div>
          </div>
        </section>

        {/* Today's Assignment Section */}
        <section className="wd-assignments">
          <h3 className="wd-section-title">Today's Assignments</h3>
          <div className="wd-assignments-grid">
            {assignments.map(assignment => (
              <div key={assignment.id} className="wd-assignment-card">
                <div className="wd-card-header">
                  <div className="wd-customer-info">
                    <img src={assignment.image} alt={assignment.customerName} className="wd-customer-image" />
                    <div>
                      <h4 className="wd-customer-name">{assignment.customerName}</h4>
                      <p className="wd-service-type">{assignment.serviceType}</p>
                    </div>
                  </div>
                  <span className="wd-priority-badge">{assignment.priority} Priority</span>
                </div>
                
                <div className="wd-card-body">
                  <div className="wd-info-row">
                    <FiMapPin size={16} />
                    <span>{assignment.address} ({assignment.distance})</span>
                  </div>
                  <div className="wd-info-row">
                    <FiClock size={16} />
                    <span>{assignment.bookingTime}</span>
                  </div>
                  <div className="wd-issue">
                    "{assignment.issue}"
                  </div>
                </div>

                {assignment.status === 'pending' ? (
                  <div className="wd-card-actions">
                    <button className="wd-btn wd-btn-reject" onClick={() => openRejectModal(assignment.id)}>
                      Reject
                    </button>
                    <button className="wd-btn wd-btn-accept" onClick={() => handleAccept(assignment.id)}>
                      Accept
                    </button>
                  </div>
                ) : (
                  <div className={`wd-assignment-status wd-status-${assignment.status}`}>
                    {assignment.status === 'accepted' ? 'Assignment Accepted' : 'Assignment Rejected'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <WorkerFooter />

      {/* Reject Workflow Modal */}
      <div className={`wd-modal-overlay ${showRejectModal ? 'active' : ''}`}>
        <div className="wd-modal">
          <h3>Reject Assignment</h3>
          <p style={{ color: 'var(--wd-text-secondary)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Please let us know why you are rejecting this assignment.
          </p>
          
          <div className="wd-reason-list">
            {rejectReasons.map((reason, index) => (
              <label key={index} className="wd-reason-label">
                <input 
                  type="radio" 
                  name="rejectReason" 
                  value={reason} 
                  checked={selectedRejectReason === reason}
                  onChange={(e) => setSelectedRejectReason(e.target.value)}
                />
                {reason}
              </label>
            ))}
          </div>

          {selectedRejectReason === 'Other' && (
            <textarea 
              className="wd-textarea" 
              placeholder="Please specify your reason here..."
              value={otherReason}
              onChange={(e) => setOtherReason(e.target.value)}
            ></textarea>
          )}

          <div className="wd-modal-actions">
            <button className="wd-btn wd-btn-cancel" onClick={closeRejectModal}>
              Cancel
            </button>
            <button 
              className="wd-btn wd-btn-submit" 
              onClick={submitReject}
              disabled={!selectedRejectReason || (selectedRejectReason === 'Other' && !otherReason.trim())}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
