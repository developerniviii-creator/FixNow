import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Briefcase, 
  CheckCircle,
  MoreVertical,
  Activity,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const statCards = [
    {
      title: "Active Bookings",
      value: "1,240",
      change: "+5.2%",
      isIncrease: true,
      icon: <Briefcase size={24} />,
      color: "green"
    },
    {
      title: "Total Workers",
      value: "356",
      change: "-1.1%",
      isIncrease: false,
      icon: <CheckCircle size={24} />,
      color: "orange"
    },
    {
      title: "Total Customers",
      value: "12,450",
      change: "+18.4%",
      isIncrease: true,
      icon: <Users size={24} />,
      color: "purple"
    }
  ];

  const recentBookings = [
    { id: '#BK-0921', customer: 'Rahul Sharma', service: 'AC Repair', status: 'Pending', date: 'Today, 10:30 AM', amount: '₹1,200' },
    { id: '#BK-0920', customer: 'Priya Patel', service: 'Plumbing', status: 'Completed', date: 'Today, 09:15 AM', amount: '₹850' },
    { id: '#BK-0919', customer: 'Amit Kumar', service: 'Electrician', status: 'In Progress', date: 'Yesterday, 04:45 PM', amount: '₹450' },
    { id: '#BK-0918', customer: 'Sneha Reddy', service: 'House Cleaning', status: 'Completed', date: 'Yesterday, 02:00 PM', amount: '₹2,500' },
    { id: '#BK-0917', customer: 'Vikram Singh', service: 'Carpentry', status: 'Cancelled', date: 'Yesterday, 11:30 AM', amount: '₹1,500' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Completed': return <span className="status-badge success">Completed</span>;
      case 'In Progress': return <span className="status-badge warning">In Progress</span>;
      case 'Pending': return <span className="status-badge info">Pending</span>;
      case 'Cancelled': return <span className="status-badge danger">Cancelled</span>;
      default: return <span className="status-badge">Unknown</span>;
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">Dashboard Overview</h1>
          <p className="dashboard-subtitle">Welcome back! Here is your marketplace summary.</p>
        </div>
        <div className="date-picker-placeholder">
          <span>Today: 31 Jul 2026</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="stats-grid">
        {statCards.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-card-header">
              <div className={`stat-icon-wrapper bg-${stat.color}`}>
                {stat.icon}
              </div>
              <div className={`stat-change ${stat.isIncrease ? 'positive' : 'negative'}`}>
                {stat.isIncrease ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="stat-card-body">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
            {/* Background decoration */}
            <div className={`stat-deco deco-${stat.color}`}></div>
          </div>
        ))}
      </div>

      <div className="dashboard-content-grid">
        {/* Recent Bookings Table */}
        <div className="dashboard-card recent-bookings">
          <div className="card-header">
            <h2>Recent Bookings</h2>
            <button className="btn-icon"><MoreVertical size={20} /></button>
          </div>
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Customer</th>
                  <th>Service</th>
                  <th>Date & Time</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking, idx) => (
                  <tr key={idx}>
                    <td className="font-medium">{booking.id}</td>
                    <td>{booking.customer}</td>
                    <td>{booking.service}</td>
                    <td className="text-muted">{booking.date}</td>
                    <td className="font-semibold">{booking.amount}</td>
                    <td>{getStatusBadge(booking.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <button className="btn-link">View All Bookings</button>
          </div>
        </div>

        {/* System Activity */}
        <div className="dashboard-card system-activity">
          <div className="card-header">
            <h2>Activity Overview</h2>
            <button className="btn-icon"><Activity size={20} /></button>
          </div>
          <div className="activity-chart-placeholder">
            <div className="chart-bars">
              {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                <div className="bar-group" key={i}>
                  <div className="bar" style={{ height: `${height}%` }}>
                    <div className="bar-tooltip">{height}0 Bookings</div>
                  </div>
                  <span className="bar-label">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="activity-stats">
            <div className="activity-stat-item">
              <span className="dot dot-primary"></span>
              <div className="stat-info">
                <span className="label">This Week</span>
                <span className="value">1,240</span>
              </div>
            </div>
            <div className="activity-stat-item">
              <span className="dot dot-secondary"></span>
              <div className="stat-info">
                <span className="label">Last Week</span>
                <span className="value">1,150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
