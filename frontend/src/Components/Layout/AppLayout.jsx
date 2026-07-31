import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  CalendarDays,
  Users,
  UserCheck,
  UserCircle,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
  Search
} from 'lucide-react';
import logo from '../../assets/logo.png';
import './layout.css';

const navLinks = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
  { name: 'Services', path: '/admin/services', icon: <Wrench size={20} /> },
  { name: 'Bookings', path: '/admin/bookings', icon: <CalendarDays size={20} /> },
  { name: 'Workers', path: '/admin/workers', icon: <UserCheck size={20} /> },
  { name: 'Customers', path: '/admin/customers', icon: <Users size={20} /> },
];

const bottomLinks = [
  { name: 'Profile', path: '/admin/profile', icon: <UserCircle size={20} /> },
  { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
];

export default function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add real logout logic here
    navigate('/');
  };

  return (
    <div className="app-layout">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* ── Sidebar ── */}
      <aside className={`app-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-logo" onClick={() => navigate('/')}>
            <img src={logo} alt="Fix Now" className="brand-logo-img" />
            <h2>FIX NOW</h2>
          </div>
          <button className="mobile-close-btn" onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-content">
          <nav className="nav-menu">
            <p className="nav-label">Main Menu</p>
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>

          <nav className="nav-menu bottom-menu">
            <p className="nav-label">Preferences</p>
            {bottomLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsSidebarOpen(false)}
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
            
            <button className="nav-item logout-btn" onClick={handleLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <div className="app-main-wrapper">
        {/* Top Header */}
        <header className="app-topbar">
          <div className="topbar-left">
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search anything..." />
            </div>
          </div>
          
          <div className="topbar-right">
            <button className="icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="user-profile-menu">
              <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" alt="Admin" className="avatar-img" />
              <div className="user-info">
                <strong>Admin User</strong>
                <span>Superadmin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content (Outlet renders nested routes) */}
        <main className="app-page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
