import React from 'react';
import { 
  Users, 
  UserCheck, 
  UserMinus, 
  TrendingUp,
  Star,
  MoreVertical,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Search,
  Filter,
  AlertTriangle
} from 'lucide-react';
import './AdminWorkers.css';

const AdminWorkers = () => {
  const workerStats = [
    { label: "Active Now", value: "248", icon: <UserCheck size={20} />, color: "green", trend: "+12%" },
    { label: "Total Registered", value: "356", icon: <Users size={20} />, color: "blue", trend: "+5%" },
    { label: "On Leave / Inactive", value: "42", icon: <UserMinus size={20} />, color: "orange", trend: "-2%" },
    { label: "New This Month", value: "34", icon: <TrendingUp size={20} />, color: "purple", trend: "+18%" }
  ];

  const workersList = [
    {
      id: "W-1042",
      name: "Ramesh Kumar",
      specialization: "Master Plumber",
      rating: 4.9,
      completedJobs: 412,
      status: "Active",
      phone: "+91 98765 43210",
      location: "Anna Nagar",
      complaints: 0
    },
    {
      id: "W-1045",
      name: "Abdul Rahman",
      specialization: "Senior Electrician",
      rating: 4.8,
      completedJobs: 328,
      status: "On Job",
      phone: "+91 98401 22334",
      location: "T Nagar",
      complaints: 0
    },
    {
      id: "W-1051",
      name: "Suresh Pillai",
      specialization: "AC Technician",
      rating: 4.6,
      completedJobs: 185,
      status: "Active",
      phone: "+91 97890 12345",
      location: "Velachery",
      complaints: 1
    },
    {
      id: "W-1058",
      name: "Ganesh Reddy",
      specialization: "Carpenter",
      rating: 4.9,
      completedJobs: 503,
      status: "Offline",
      phone: "+91 94444 55667",
      location: "Adyar",
      complaints: 0
    },
    {
      id: "W-1062",
      name: "Karthik Raj",
      specialization: "General Handyman",
      rating: 4.5,
      completedJobs: 92,
      status: "Active",
      phone: "+91 95555 66778",
      location: "OMR",
      complaints: 3
    }
  ];

  const getStatusIndicator = (status) => {
    switch(status) {
      case 'Active': return <span className="status-chip chip-success"><span className="status-dot"></span>Online</span>;
      case 'On Job': return <span className="status-chip chip-warning"><span className="status-dot"></span>On Job</span>;
      case 'Offline': return <span className="status-chip chip-neutral"><span className="status-dot"></span>Offline</span>;
      default: return null;
    }
  };

  return (
    <div className="admin-workers-container">
      <div className="workers-header">
        <div>
          <h1 className="workers-title">Worker Fleet Management</h1>
          <p className="workers-subtitle">Monitor online status, ratings, and assignments of your service professionals.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <UserCheck size={18} />
            <span>Add New Worker</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="worker-stats-row">
        {workerStats.map((stat, idx) => (
          <div className="w-stat-card" key={idx}>
            <div className="w-stat-content">
              <p className="w-stat-label">{stat.label}</p>
              <h3 className="w-stat-value">{stat.value}</h3>
              <div className="w-stat-trend">
                <span className={stat.trend.startsWith('+') ? 'trend-up' : 'trend-down'}>
                  {stat.trend}
                </span>
                <span className="trend-text">vs last month</span>
              </div>
            </div>
            <div className={`w-stat-icon bg-${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Directory Section */}
      <div className="worker-directory-card">
        <div className="directory-toolbar">
          <div className="directory-tabs">
            <button className="tab active">All Workers</button>
            <button className="tab">Active Now</button>
            <button className="tab">On Job</button>
            <button className="tab">Pending Verification</button>
          </div>
          
          <div className="directory-filters">
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search workers..." />
            </div>
            <button className="btn-icon-outline">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="workers-grid">
          {workersList.map((worker, idx) => (
            <div className="worker-profile-card" key={idx}>
              <div className="profile-header">
                <div className="profile-avatar">
                  {/* Using a placeholder avatar with initials */}
                  <span>{worker.name.split(' ').map(n => n[0]).join('')}</span>
                  <div className={`status-badge-circle ${worker.status === 'Active' ? 'active' : worker.status === 'On Job' ? 'busy' : 'offline'}`}></div>
                </div>
                <button className="btn-icon-transparent">
                  <MoreVertical size={18} />
                </button>
              </div>
              
              <div className="profile-info">
                <div className="profile-name-group">
                  <h3>{worker.name}</h3>
                  <ShieldCheck size={16} className="verified-icon" />
                </div>
                <p className="profile-specialty">{worker.specialization}</p>
                <span className="profile-id">{worker.id}</span>
              </div>
              
              <div className="profile-metrics">
                <div className="metric">
                  <Star size={14} className="star-icon" />
                  <span>{worker.rating}</span>
                </div>
                <div className="metric-divider"></div>
                <div className="metric">
                  <span>{worker.completedJobs} Jobs</span>
                </div>
                <div className="metric-divider"></div>
                <div className="metric">
                  {getStatusIndicator(worker.status)}
                </div>
              </div>
              
              <div className="profile-contact">
                <div className="contact-row">
                  <Phone size={14} />
                  <span>{worker.phone}</span>
                </div>
                <div className="contact-row">
                  <MapPin size={14} />
                  <span>{worker.location}</span>
                </div>
              </div>
              
              <div className="profile-footer">
                {worker.complaints > 0 ? (
                  <button className="btn-profile-action-danger">
                    <AlertTriangle size={16} /> Revoke Access ({worker.complaints} Complaints)
                  </button>
                ) : (
                  <>
                    <button className="btn-profile-action">View Profile</button>
                    <button className="btn-profile-message"><Mail size={16} /></button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminWorkers;
