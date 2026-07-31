import React, { useState } from 'react';
import { FiMapPin, FiClock, FiPhoneCall, FiNavigation, FiCheckCircle, FiAlertCircle, FiCalendar } from 'react-icons/fi';
import WorkerHeader from '../../../Components/Worker/Header/WorkerHeader';
import WorkerFooter from '../../../Components/Worker/Footer/WorkerFooter';
import './WorkerAssignments.css';

// Mock Data
const mockAssignments = {
  active: [
    {
      id: 'A-201',
      customerName: 'Sarah Jenkins',
      serviceType: 'Electrical Repair',
      address: '452 Sunset Boulevard, Appt 4B',
      issue: 'Ceiling fan is making a loud buzzing noise and sparks occasionally.',
      date: 'Today',
      time: '2:30 PM - 4:00 PM',
      priority: 'High',
      distance: '2.5 km',
      image: 'https://i.pravatar.cc/150?u=sarah',
      status: 'On Route'
    }
  ],
  upcoming: [
    {
      id: 'A-202',
      customerName: 'Michael Chang',
      serviceType: 'Wiring Installation',
      address: '1024 Silicon Avenue, Tech Park',
      issue: 'Need new power outlets installed in the home office.',
      date: 'Tomorrow',
      time: '10:00 AM - 1:00 PM',
      priority: 'Medium',
      distance: '5.1 km',
      image: 'https://i.pravatar.cc/150?u=michael',
      status: 'Scheduled'
    },
    {
      id: 'A-203',
      customerName: 'Emily Watson',
      serviceType: 'Lighting Fix',
      address: '77 Riverside Drive',
      issue: 'Outdoor garden lights are not turning on.',
      date: 'Aug 2nd',
      time: '4:00 PM - 5:00 PM',
      priority: 'Low',
      distance: '3.8 km',
      image: 'https://i.pravatar.cc/150?u=emily',
      status: 'Scheduled'
    }
  ],
  pending: [
    {
      id: 'A-204',
      customerName: 'David Miller',
      serviceType: 'Panel Upgrade',
      address: '12 North Star Way',
      issue: 'Main breaker keeps tripping when AC is on.',
      date: 'Pending Approval',
      time: 'TBD',
      priority: 'High',
      distance: '8.2 km',
      image: 'https://i.pravatar.cc/150?u=david',
      status: 'Awaiting Confirmation'
    }
  ]
};

const WorkerAssignments = () => {
  const [activeTab, setActiveTab] = useState('active');

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'wa-priority-high';
      case 'Medium': return 'wa-priority-medium';
      case 'Low': return 'wa-priority-low';
      default: return '';
    }
  };

  const currentList = mockAssignments[activeTab] || [];

  return (
    <div className="wa-page-wrapper">
      <WorkerHeader />
      
      <main className="wa-main-content">
        <div className="wa-page-header">
          <h2>My Assignments</h2>
          <p>Manage your active jobs, upcoming schedules, and pending requests.</p>
        </div>

        <div className="wa-content-layout">
          {/* Left Column: Assignment List */}
          <section className="wa-assignments-section">
            <div className="wa-tabs">
              <button 
                className={`wa-tab-btn ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => setActiveTab('active')}
              >
                Active / Ongoing <span className="wa-badge">{mockAssignments.active.length}</span>
              </button>
              <button 
                className={`wa-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming <span className="wa-badge">{mockAssignments.upcoming.length}</span>
              </button>
              <button 
                className={`wa-tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
                onClick={() => setActiveTab('pending')}
              >
                Pending Review <span className="wa-badge">{mockAssignments.pending.length}</span>
              </button>
            </div>

            <div className="wa-assignment-list">
              {currentList.length > 0 ? (
                currentList.map(job => (
                  <div key={job.id} className="wa-job-card">
                    <div className="wa-card-header">
                      <div className="wa-customer-info">
                        <img src={job.image} alt={job.customerName} />
                        <div>
                          <h4>{job.customerName}</h4>
                          <span className="wa-service-type">{job.serviceType}</span>
                        </div>
                      </div>
                      <div className={`wa-priority-badge ${getPriorityColor(job.priority)}`}>
                        {job.priority} Priority
                      </div>
                    </div>

                    <div className="wa-card-body">
                      <div className="wa-info-row">
                        <div className="wa-info-item">
                          <FiMapPin className="wa-icon" />
                          <span>{job.address} <strong>({job.distance})</strong></span>
                        </div>
                      </div>
                      <div className="wa-info-row">
                        <div className="wa-info-item">
                          <FiCalendar className="wa-icon" />
                          <span>{job.date}</span>
                        </div>
                        <div className="wa-info-item">
                          <FiClock className="wa-icon" />
                          <span>{job.time}</span>
                        </div>
                      </div>
                      
                      <div className="wa-issue-box">
                        <strong>Issue Reported:</strong> {job.issue}
                      </div>
                    </div>

                    <div className="wa-card-footer">
                      <div className="wa-status-text">
                        <FiAlertCircle /> Status: <span>{job.status}</span>
                      </div>
                      <div className="wa-action-buttons">
                        {activeTab === 'active' && (
                          <>
                            <button className="wa-btn wa-btn-secondary"><FiPhoneCall /> Contact</button>
                            <button className="wa-btn wa-btn-primary"><FiNavigation /> Navigate</button>
                            <button className="wa-btn wa-btn-success"><FiCheckCircle /> Complete</button>
                          </>
                        )}
                        {activeTab === 'upcoming' && (
                          <>
                            <button className="wa-btn wa-btn-secondary"><FiPhoneCall /> Contact</button>
                            <button className="wa-btn wa-btn-primary">View Details</button>
                          </>
                        )}
                        {activeTab === 'pending' && (
                          <>
                            <button className="wa-btn wa-btn-danger">Decline</button>
                            <button className="wa-btn wa-btn-success">Accept Job</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="wa-empty-state">
                  <FiCheckCircle className="wa-empty-icon" />
                  <h3>No {activeTab} assignments</h3>
                  <p>You're all caught up! Check back later for new requests.</p>
                </div>
              )}
            </div>
          </section>

          {/* Right Column: Live Map Mockup */}
          <aside className="wa-map-section">
            <div className="wa-map-card">
              <div className="wa-map-header">
                <h3>Live Area Map</h3>
                <span className="wa-map-status"><span className="pulse-dot"></span> Tracking Active</span>
              </div>
              <div className="wa-map-container">
                {/* Mock Map Background */}
                <div className="wa-mock-map">
                  <div className="map-marker worker-marker" style={{ top: '50%', left: '50%' }}>
                    <div className="marker-ping"></div>
                    <div className="marker-core">You</div>
                  </div>
                  
                  {activeTab === 'active' && currentList.map((job, idx) => (
                    <div key={idx} className="map-marker job-marker" style={{ top: '30%', left: '70%' }}>
                      <FiMapPin />
                      <div className="marker-tooltip">{job.customerName}</div>
                    </div>
                  ))}
                  
                  {/* Decorative Map Lines */}
                  <svg className="map-route" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {activeTab === 'active' && (
                      <path d="M 50 50 Q 60 40 70 30" stroke="#3b82f6" strokeWidth="2" fill="none" strokeDasharray="5,5" className="route-anim" />
                    )}
                  </svg>
                </div>
              </div>
              <div className="wa-map-footer">
                <p>Showing relative locations for {activeTab} assignments within your service radius.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <WorkerFooter />
    </div>
  );
};

export default WorkerAssignments;
