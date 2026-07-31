import React from 'react';
import { 
  CalendarDays,
  Clock,
  MapPin,
  AlertCircle,
  CheckCircle,
  MoreHorizontal,
  Search,
  Filter,
  Users
} from 'lucide-react';
import './AdminBookings.css';

const AdminBookings = () => {
  const bookingStats = [
    { label: "Total Active", value: "1,240", icon: <CalendarDays size={20} />, color: "blue" },
    { label: "Pending Assignment", value: "342", icon: <AlertCircle size={20} />, color: "orange" },
    { label: "In Progress", value: "580", icon: <Clock size={20} />, color: "yellow" },
    { label: "Completed Today", value: "318", icon: <CheckCircle size={20} />, color: "green" },
  ];

  const availableBookings = [
    {
      id: "#BKG-8402",
      service: "AC Repair & Service",
      customer: "Suresh Kumar",
      location: "Anna Nagar, Chennai",
      time: "Today • 02:00 PM - 04:00 PM",
      urgency: "High",
      status: "Pending"
    },
    {
      id: "#BKG-8403",
      service: "Plumbing Service",
      customer: "Anjali Gupta",
      location: "T Nagar, Chennai",
      time: "Today • 04:30 PM",
      urgency: "Medium",
      status: "Pending"
    },
    {
      id: "#BKG-8404",
      service: "Electrical Fault",
      customer: "Rahul Sharma",
      location: "Velachery, Chennai",
      time: "Tomorrow • 10:00 AM",
      urgency: "Low",
      status: "Pending"
    },
    {
      id: "#BKG-8405",
      service: "House Deep Cleaning",
      customer: "Priya Singh",
      location: "OMR, Chennai",
      time: "Tomorrow • 09:00 AM",
      urgency: "Medium",
      status: "Pending"
    },
    {
      id: "#BKG-8406",
      service: "Carpentry Work",
      customer: "Vikram Raj",
      location: "Adyar, Chennai",
      time: "Tomorrow • 01:00 PM",
      urgency: "Low",
      status: "Pending"
    }
  ];

  const getUrgencyBadge = (urgency) => {
    switch(urgency) {
      case 'High': return <span className="badge urgency-high">High Urgency</span>;
      case 'Medium': return <span className="badge urgency-medium">Medium Urgency</span>;
      case 'Low': return <span className="badge urgency-low">Low Urgency</span>;
      default: return null;
    }
  };

  return (
    <div className="admin-bookings-container">
      <div className="bookings-header">
        <div>
          <h1 className="bookings-title">Active Bookings</h1>
          <p className="bookings-subtitle">Monitor and manage currently available and ongoing bookings.</p>
        </div>
      </div>

      <div className="booking-stats-grid">
        {bookingStats.map((stat, index) => (
          <div className="booking-stat-card" key={index}>
            <div className={`b-stat-icon bg-${stat.color}`}>
              {stat.icon}
            </div>
            <div className="b-stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bookings-list-card">
        <div className="card-toolbar">
          <h2>Currently Available Bookings</h2>
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search by ID, customer, or service..." />
          </div>
        </div>

        <div className="available-bookings-grid">
          {availableBookings.map((booking, idx) => (
            <div className="booking-item-card" key={idx}>
              <div className="b-item-header">
                <span className="b-id">{booking.id}</span>
                {getUrgencyBadge(booking.urgency)}
              </div>
              
              <h3 className="b-service">{booking.service}</h3>
              
              <div className="b-details">
                <div className="b-detail-row">
                  <Users size={16} />
                  <span>{booking.customer}</span>
                </div>
                <div className="b-detail-row">
                  <MapPin size={16} />
                  <span>{booking.location}</span>
                </div>
                <div className="b-detail-row text-highlight">
                  <Clock size={16} />
                  <span>{booking.time}</span>
                </div>
              </div>
              
              <div className="b-item-footer">
                <div className="status-indicator">
                  <span className="dot pulse-orange"></span>
                  <span>Needs Assignment</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;
