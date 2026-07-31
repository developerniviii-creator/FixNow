import React from 'react';
import { 
  CheckCircle,
  Wrench,
  Droplet,
  Zap,
  Home,
  Thermometer,
  Shield,
  Activity
} from 'lucide-react';
import './AdminServices.css';

const AdminServices = () => {
  const serviceStats = [
    {
      category: "Plumbing Services",
      completed: 345,
      total: 360,
      icon: <Droplet size={20} />,
      color: "blue"
    },
    {
      category: "Electrical Repairs",
      completed: 280,
      total: 295,
      icon: <Zap size={20} />,
      color: "yellow"
    },
    {
      category: "AC Repair & Maintenance",
      completed: 450,
      total: 465,
      icon: <Thermometer size={20} />,
      color: "cyan"
    },
    {
      category: "House Cleaning",
      completed: 180,
      total: 190,
      icon: <Home size={20} />,
      color: "purple"
    },
    {
      category: "Carpentry",
      completed: 120,
      total: 135,
      icon: <Wrench size={20} />,
      color: "orange"
    },
    {
      category: "Pest Control",
      completed: 95,
      total: 100,
      icon: <Shield size={20} />,
      color: "green"
    }
  ];

  const totalCompleted = serviceStats.reduce((sum, service) => sum + service.completed, 0);
  const overallTotal = serviceStats.reduce((sum, service) => sum + service.total, 0);
  const overallPercentage = Math.round((totalCompleted / overallTotal) * 100);

  return (
    <div className="admin-services-container">
      <div className="services-header">
        <div>
          <h1 className="services-title">Service Completion Overview</h1>
          <p className="services-subtitle">Track the performance and completion rates of various service categories.</p>
        </div>
      </div>

      <div className="services-overview-card">
        <div className="overview-content">
          <div className="overview-text">
            <h2>Overall Completed Services</h2>
            <div className="total-completed-value">
              <span>{totalCompleted.toLocaleString()}</span>
              <small> / {overallTotal.toLocaleString()}</small>
            </div>
            <p>Across all service categories this year.</p>
          </div>
          <div className="overview-progress-circle">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="bg-circle" />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                className="progress-circle" 
                strokeDasharray={`${overallPercentage * 2.83} 283`}
              />
            </svg>
            <div className="circle-text">
              <span>{overallPercentage}%</span>
              <small>Success Rate</small>
            </div>
          </div>
        </div>
      </div>

      <div className="services-grid">
        {serviceStats.map((service, idx) => {
          const percentage = Math.round((service.completed / service.total) * 100);
          
          return (
            <div className="service-stat-card" key={idx}>
              <div className="service-card-header">
                <div className={`service-icon bg-${service.color}`}>
                  {service.icon}
                </div>
                <div className="service-percentage">
                  <CheckCircle size={14} className={`text-${service.color}`} />
                  <span>{percentage}%</span>
                </div>
              </div>
              
              <h3 className="service-category">{service.category}</h3>
              
              <div className="service-numbers">
                <span className="completed-text">{service.completed} completed</span>
                <span className="total-text">of {service.total}</span>
              </div>
              
              <div className="service-progress-bar-container">
                <div 
                  className={`service-progress-bar fill-${service.color}`} 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="detailed-analytics-card">
        <div className="card-header">
          <h2>Monthly Service Completion Trends</h2>
          <button className="btn-icon"><Activity size={20} /></button>
        </div>
        <div className="trend-chart-placeholder">
          <div className="chart-bars">
            {[45, 60, 50, 75, 80, 95].map((height, i) => (
              <div className="trend-bar-group" key={i}>
                <div className="trend-bar" style={{ height: `${height}%` }}>
                  <div className="trend-tooltip">{height * 3} Completed</div>
                </div>
                <span className="trend-label">{['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
