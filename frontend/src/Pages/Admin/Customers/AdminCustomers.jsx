import React from 'react';
import { 
  Users,
  UserCheck,
  TrendingUp,
  Award,
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  DollarSign
} from 'lucide-react';
import './AdminCustomers.css';

const AdminCustomers = () => {
  const customerStats = [
    { label: "Total Active Customers", value: "12,450", icon: <UserCheck size={20} />, color: "blue", trend: "+15%" },
    { label: "New This Month", value: "842", icon: <TrendingUp size={20} />, color: "green", trend: "+8%" },
    { label: "Total Registered", value: "18,290", icon: <Users size={20} />, color: "purple", trend: "+4%" },
    { label: "Premium Members", value: "2,150", icon: <Award size={20} />, color: "yellow", trend: "+12%" }
  ];

  const customersList = [
    {
      id: "C-9012",
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      phone: "+91 98765 11223",
      joined: "Jan 12, 2026",
      status: "Active",
      totalSpent: "₹12,400",
      bookings: 14,
      isPremium: true
    },
    {
      id: "C-9015",
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      phone: "+91 98401 33445",
      joined: "Feb 05, 2026",
      status: "Active",
      totalSpent: "₹4,200",
      bookings: 5,
      isPremium: false
    },
    {
      id: "C-9021",
      name: "Priya Patel",
      email: "priya.patel@example.com",
      phone: "+91 97890 55667",
      joined: "Mar 22, 2026",
      status: "Inactive",
      totalSpent: "₹1,500",
      bookings: 2,
      isPremium: false
    },
    {
      id: "C-9028",
      name: "Vikram Singh",
      email: "vikram.singh@example.com",
      phone: "+91 94444 77889",
      joined: "Apr 10, 2026",
      status: "Active",
      totalSpent: "₹28,600",
      bookings: 32,
      isPremium: true
    },
    {
      id: "C-9034",
      name: "Anjali Gupta",
      email: "anjali.gupta@example.com",
      phone: "+91 95555 99001",
      joined: "May 18, 2026",
      status: "Active",
      totalSpent: "₹6,800",
      bookings: 8,
      isPremium: false
    }
  ];

  const getStatusBadge = (status) => {
    return (
      <span className={`status-badge ${status === 'Active' ? 'success' : 'neutral'}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="admin-customers-container">
      <div className="customers-header">
        <div>
          <h1 className="customers-title">Customer Management</h1>
          <p className="customers-subtitle">View and manage your active customer base and their engagement.</p>
        </div>
        <div className="header-actions">
          <button className="btn-primary">
            <Users size={18} />
            <span>Export Data</span>
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="customer-stats-row">
        {customerStats.map((stat, idx) => (
          <div className="c-stat-card" key={idx}>
            <div className="c-stat-content">
              <p className="c-stat-label">{stat.label}</p>
              <h3 className="c-stat-value">{stat.value}</h3>
              <div className="c-stat-trend">
                <span className="trend-up">{stat.trend}</span>
                <span className="trend-text">vs last month</span>
              </div>
            </div>
            <div className={`c-stat-icon bg-${stat.color}`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Customers Table Section */}
      <div className="customer-directory-card">
        <div className="directory-toolbar">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search by name, email, or ID..." />
          </div>
          <div className="directory-filters">
            <button className="btn-outline-small">
              <Filter size={16} />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="customers-table">
            <thead>
              <tr>
                <th>Customer Info</th>
                <th>Contact</th>
                <th>Joined Date</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customersList.map((customer, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="customer-info-cell">
                      <div className="customer-avatar">
                        {customer.name.charAt(0)}
                      </div>
                      <div className="customer-details">
                        <span className="customer-name">
                          {customer.name}
                          {customer.isPremium && <Award size={14} className="premium-icon" />}
                        </span>
                        <span className="customer-id">{customer.id}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="customer-contact">
                      <span className="contact-item"><Mail size={12} /> {customer.email}</span>
                      <span className="contact-item"><Phone size={12} /> {customer.phone}</span>
                    </div>
                  </td>
                  <td>
                    <div className="customer-date">
                      <Calendar size={14} />
                      <span>{customer.joined}</span>
                    </div>
                  </td>
                  <td>
                    <div className="customer-spent">
                      <span className="spent-amount">{customer.totalSpent}</span>
                      <span className="spent-bookings">{customer.bookings} bookings</span>
                    </div>
                  </td>
                  <td>{getStatusBadge(customer.status)}</td>
                  <td>
                    <button className="btn-icon-transparent">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="table-pagination">
          <span className="pagination-info">Showing 1 to 5 of 12,450 entries</span>
          <div className="pagination-controls">
            <button className="btn-page" disabled>Previous</button>
            <button className="btn-page active">1</button>
            <button className="btn-page">2</button>
            <button className="btn-page">3</button>
            <button className="btn-page">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
