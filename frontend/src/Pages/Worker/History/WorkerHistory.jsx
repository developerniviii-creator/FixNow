import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiFilter, FiDownload, FiStar, FiMapPin, FiCalendar, FiClock, FiX, FiCheckCircle, FiXCircle, FiInfo } from 'react-icons/fi';
import WorkerHeader from '../../../Components/Worker/Header/WorkerHeader';
import WorkerFooter from '../../../Components/Worker/Footer/WorkerFooter';
import './WorkerHistory.css';

// Mock History Data
const mockHistory = [
  {
    id: 'H-1001',
    customerName: 'Alice Freeman',
    customerImage: 'https://i.pravatar.cc/150?u=alice',
    role: 'Senior Electrician',
    service: 'Ceiling Fan Installation',
    address: '101 Maple Street, Apartment 4B',
    date: '2026-07-28',
    time: '10:00 AM - 12:00 PM',
    amount: '₹ 850',
    rating: 5,
    status: 'Completed',
    review: 'Excellent service! The electrician arrived on time, was very polite, and installed the fan perfectly without any mess. Highly recommended.'
  },
  {
    id: 'H-1002',
    customerName: 'Robert Fox',
    customerImage: 'https://i.pravatar.cc/150?u=robert',
    role: 'Senior Electrician',
    service: 'Main Panel Upgrade',
    address: '452 Pine Valley Road',
    date: '2026-07-26',
    time: '02:00 PM - 05:00 PM',
    amount: '₹ 4,200',
    rating: 4,
    status: 'Completed',
    review: 'Good work on the panel upgrade. Took a little longer than expected but the quality of work is solid and everything works perfectly now.'
  },
  {
    id: 'H-1003',
    customerName: 'Jane Cooper',
    customerImage: 'https://i.pravatar.cc/150?u=jane',
    role: 'Senior Electrician',
    service: 'Wiring Issue Repair',
    address: '789 Oak Avenue, Floor 2',
    date: '2026-07-25',
    time: '09:00 AM - 11:00 AM',
    amount: '₹ 1,200',
    rating: 0,
    status: 'Cancelled',
    review: ''
  },
  {
    id: 'H-1004',
    customerName: 'Cameron Williamson',
    customerImage: 'https://i.pravatar.cc/150?u=cameron',
    role: 'Senior Electrician',
    service: 'Smart Home Device Setup',
    address: '321 Elm Street, Suite 500',
    date: '2026-07-20',
    time: '04:00 PM - 06:00 PM',
    amount: '₹ 1,800',
    rating: 5,
    status: 'Completed',
    review: 'Very knowledgeable about smart home integrations. Setup my smart switches perfectly and explained how to use the app.'
  },
  {
    id: 'H-1005',
    customerName: 'Leslie Alexander',
    customerImage: 'https://i.pravatar.cc/150?u=leslie',
    role: 'Senior Electrician',
    service: 'Emergency Power Loss Check',
    address: '567 Birch Blvd',
    date: '2026-07-15',
    time: '08:00 PM - 10:00 PM',
    amount: '₹ 2,500',
    rating: 5,
    status: 'Completed',
    review: 'Lifesaver! Arrived late evening and quickly found the short circuit issue. Restored power efficiently.'
  }
];

// Mock Chart Data
const monthlyData = [
  { month: 'Jan', earnings: 45000 },
  { month: 'Feb', earnings: 52000 },
  { month: 'Mar', earnings: 48000 },
  { month: 'Apr', earnings: 61000 },
  { month: 'May', earnings: 59000 },
  { month: 'Jun', earnings: 68000 },
  { month: 'Jul', earnings: 75000 }
];

const WorkerHistory = () => {
  const navigate = useNavigate();
  
  // States
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReview, setSelectedReview] = useState(null);
  
  const itemsPerPage = 3;

  // Filtering Logic
  const filteredHistory = mockHistory.filter(job => {
    const matchesSearch = job.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination Logic
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const currentJobs = filteredHistory.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Helper for max earnings to scale chart bars
  const maxEarnings = Math.max(...monthlyData.map(d => d.earnings));

  return (
    <div className="history-page-wrapper">
      <WorkerHeader />
      
      <main className="wh-main-content">
        <div className="wh-page-header">
          <h2>Work History & Earnings</h2>
          <p>Track your past assignments, earnings progress, and customer feedback.</p>
        </div>

        {/* Statistics Section */}
        <section className="wh-stats-grid">
          <div className="wh-stat-card">
            <div className="wh-stat-icon jobs-icon"><FiCheckCircle /></div>
            <div className="wh-stat-details">
              <h3>Total Jobs</h3>
              <p className="wh-stat-value">124</p>
            </div>
          </div>
          <div className="wh-stat-card">
            <div className="wh-stat-icon earnings-icon"><FiStar /></div>
            <div className="wh-stat-details">
              <h3>Total Earnings</h3>
              <p className="wh-stat-value">₹ 2,45,800</p>
            </div>
          </div>
          <div className="wh-stat-card">
            <div className="wh-stat-icon rating-icon"><FiStar /></div>
            <div className="wh-stat-details">
              <h3>Avg Rating</h3>
              <p className="wh-stat-value">4.8 <span className="wh-stat-sub">/ 5.0</span></p>
            </div>
          </div>
          <div className="wh-stat-card">
            <div className="wh-stat-icon cancelled-icon"><FiXCircle /></div>
            <div className="wh-stat-details">
              <h3>Cancelled</h3>
              <p className="wh-stat-value">12</p>
            </div>
          </div>
        </section>

        <div className="wh-content-layout">
          {/* Main History List */}
          <section className="wh-history-section">
            <div className="wh-filters">
              <div className="wh-search-bar">
                <FiSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search by ID, name, or service..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="wh-filter-dropdown">
                <FiFilter className="filter-icon" />
                <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}>
                  <option value="All">All Statuses</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            <div className="wh-job-list">
              {currentJobs.length > 0 ? (
                currentJobs.map(job => (
                  <div key={job.id} className="wh-job-card">
                    <div className="wh-job-header">
                      <div className="wh-job-customer">
                        <img src={job.customerImage} alt={job.customerName} />
                        <div>
                          <h4>{job.customerName}</h4>
                          <span className="wh-job-role">{job.role}</span>
                        </div>
                      </div>
                      <div className={`wh-status-badge ${job.status.toLowerCase()}`}>
                        {job.status}
                      </div>
                    </div>
                    
                    <div className="wh-job-details">
                      <div className="wh-detail-group main-service">
                        <strong>Service:</strong> {job.service} <span className="wh-job-id">({job.id})</span>
                      </div>
                      <div className="wh-detail-group">
                        <FiMapPin /> <span>{job.address}</span>
                      </div>
                      <div className="wh-detail-group">
                        <FiCalendar /> <span>{job.date}</span>
                        <span className="wh-divider">•</span>
                        <FiClock /> <span>{job.time}</span>
                      </div>
                      
                      <div className="wh-job-metrics">
                        <div className="wh-metric-box">
                          <span className="label">Earned</span>
                          <span className="value earnings">{job.amount}</span>
                        </div>
                        {job.status === 'Completed' && (
                          <div className="wh-metric-box">
                            <span className="label">Rating</span>
                            <span className="value rating">
                              {job.rating} <FiStar className="star-icon" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="wh-job-actions">
                      <button className="wh-btn wh-btn-secondary"><FiInfo /> View Details</button>
                      {job.status === 'Completed' && (
                        <>
                          <button className="wh-btn wh-btn-outline"><FiDownload /> Invoice</button>
                          <button className="wh-btn wh-btn-primary" onClick={() => setSelectedReview(job)}>
                            Read Review
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="wh-empty-state">
                  <div className="wh-empty-icon-wrap">
                    <FiSearch className="wh-empty-icon" />
                  </div>
                  <h3>No Jobs Found</h3>
                  <p>Try adjusting your search or filter to find past assignments.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="wh-pagination">
                <button 
                  onClick={() => handlePageChange(currentPage - 1)} 
                  disabled={currentPage === 1}
                  className="wh-page-btn"
                >
                  Prev
                </button>
                <div className="wh-page-numbers">
                  {[...Array(totalPages)].map((_, idx) => (
                    <button 
                      key={idx} 
                      className={`wh-page-num ${currentPage === idx + 1 ? 'active' : ''}`}
                      onClick={() => handlePageChange(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => handlePageChange(currentPage + 1)} 
                  disabled={currentPage === totalPages}
                  className="wh-page-btn"
                >
                  Next
                </button>
              </div>
            )}
          </section>

          {/* Sidebar Chart */}
          <aside className="wh-sidebar">
            <div className="wh-chart-card">
              <h3>Monthly Earnings Overview</h3>
              <div className="wh-bar-chart">
                {monthlyData.map((data, idx) => {
                  const heightPercent = (data.earnings / maxEarnings) * 100;
                  return (
                    <div key={idx} className="wh-bar-column">
                      <div className="wh-bar-tooltip">₹ {data.earnings.toLocaleString()}</div>
                      <div className="wh-bar-track">
                        <div 
                          className="wh-bar-fill" 
                          style={{ height: `${heightPercent}%` }}
                        ></div>
                      </div>
                      <span className="wh-bar-label">{data.month}</span>
                    </div>
                  )
                })}
              </div>
            </div>
            
            <div className="wh-sidebar-promo">
              <div className="wh-promo-content">
                <h4>Boost Your Profile!</h4>
                <p>Complete 5 more high-rated jobs this month to achieve 'Pro' status and get 20% more verified leads.</p>
                <button className="wh-btn wh-btn-primary full-width">View Tips</button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <WorkerFooter />

      {/* Review Modal */}
      <div className={`wh-modal-overlay ${selectedReview ? 'active' : ''}`}>
        <div className="wh-modal">
          <button className="wh-modal-close" onClick={() => setSelectedReview(null)}><FiX /></button>
          {selectedReview && (
            <>
              <div className="wh-modal-header">
                <img src={selectedReview.customerImage} alt={selectedReview.customerName} />
                <div>
                  <h3>Review from {selectedReview.customerName}</h3>
                  <div className="wh-modal-rating">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className={`star ${i < selectedReview.rating ? 'filled' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="wh-modal-body">
                <p className="wh-review-text">"{selectedReview.review}"</p>
                <div className="wh-review-meta">
                  <span>Job: {selectedReview.service}</span>
                  <span>Date: {selectedReview.date}</span>
                </div>
              </div>
              <div className="wh-modal-actions">
                <button className="wh-btn wh-btn-primary full-width" onClick={() => setSelectedReview(null)}>
                  Close Review
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerHistory;
