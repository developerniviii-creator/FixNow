import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Customer/Home/Home';
import MyBookings from './Pages/Customer/Booking/MyBookings';
import Connect from './Pages/Customer/Connect/Connect';
import Booking from './Pages/Customer/Booking/Booking';
import NeedService from './Pages/Customer/NeedService/NeedService';
import AppLayout from './Components/Layout/AppLayout';
import AdminPagePlaceholder from './Pages/Admin/AdminPagePlaceholder';
import AdminDashboard from './Pages/Admin/Dashboard/AdminDashboard';
import AdminServices from './Pages/Admin/Services/AdminServices';
import AdminBookings from './Pages/Admin/Bookings/AdminBookings';
import AdminWorkers from './Pages/Admin/Workers/AdminWorkers';
import AdminCustomers from './Pages/Admin/Customers/AdminCustomers';
import AdminProfile from './Pages/Admin/Profile/AdminProfile';
import AdminSettings from './Pages/Admin/Settings/AdminSettings';
import WorkerAuth from './Pages/Worker/Auth/WorkerAuth';
import WorkerRegistration from './Pages/Worker/Registration/WorkerRegistration';
import WorkerDashboard from './Pages/Worker/Dashboard/WorkerDashboard';
import WorkerHistory from './Pages/Worker/History/WorkerHistory';
import WorkerAssignments from './Pages/Worker/Assignments/WorkerAssignments';
import AdminAuth from './Pages/Admin/Auth/AdminAuth';



function App() {
  const navigate = useNavigate();
  const navigateToMyBookings = () => navigate('/mybookings');
  const [selectedBookingService, setSelectedBookingService] = useState('Plumbing Services');
  const [activeBookings, setActiveBookings] = useState([
    {
      id: 'SERV-94821',
      serviceName: 'AC Repair & Service',
      customerName: 'Velkumar',
      mobileNumber: '+91 98765 43210',
      doorNo: 'Flat 402',
      apartmentName: 'Skyline Paradise',
      streetName: '12th Cross Street, Anna Nagar',
      landMark: 'Opposite Metro Station',
      city: 'Chennai',
      district: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600040',
      googleMapLocation: 'https://maps.google.com/?q=13.0827,80.2707',
      preferredVisitTime: 'Today • 04:00 PM - 06:00 PM',
      issue: 'AC unit blowing warm air and making clicking noise',
      status: 'Technician Assigned',
      progressStep: 2,
      technician: { name: 'Arun Kumar', phone: '+91 98401 22334', rating: '4.9 ★' },
      date: 'Today, 04:30 PM'
    }
  ]);

  const handleNavigateToBooking = (serviceName) => {
    setSelectedBookingService(serviceName || 'General Home Service');
    navigate('/booking');
  };

  const handleNavigateToNeedService = (serviceName) => {
    if (serviceName) {
      setSelectedBookingService(serviceName);
    }
    navigate('/need-service');
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            navigateToConnect={() => navigate('/connect')}
            navigateToBooking={handleNavigateToBooking}
            navigateToNeedService={handleNavigateToNeedService}
            navigateToMyBookings={navigateToMyBookings}
            activeBookings={activeBookings}
            setActiveBookings={setActiveBookings}
          />
        } 
      />
      <Route 
        path="/connect" 
        element={<Connect navigateToHome={() => navigate('/')} />} 
      />
      <Route 
        path="/booking" 
        element={
          <Booking 
            navigateToHome={() => navigate('/')}
            selectedService={selectedBookingService}
            activeBookings={activeBookings}
            setActiveBookings={setActiveBookings}
          />
        } 
      />
      <Route 
        path="/need-service" 
        element={
          <NeedService
            navigateToHome={() => navigate('/')}
            initialService={selectedBookingService}
          />
        } 
      />
      <Route
        path="/mybookings"
        element={<MyBookings activeBookings={activeBookings} setActiveBookings={setActiveBookings} />}
      />
      <Route
        path="/worker/auth"
        element={<WorkerAuth />}
      />
      <Route
        path="/worker/register"
        element={<WorkerRegistration />}
      />
      <Route
        path="/worker/dashboard"
        element={<WorkerDashboard />}
      />
      <Route
        path="/worker/history"
        element={<WorkerHistory />}
      />
      <Route
        path="/worker/assignments"
        element={<WorkerAssignments />}
      />
      <Route
        path="/admin/auth"
        element={<AdminAuth />}
      />
      <Route
        path="/admin/signup"
        element={<AdminAuth />}
      />

      {/* ── Unified Admin/Platform Layout ── */}
      <Route path="/admin" element={<AppLayout />}>
        {/* Redirect /admin to /admin/dashboard implicitly by setting index */}
        <Route index element={<AdminDashboard />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="services" element={<AdminServices />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="workers" element={<AdminWorkers />} />
        <Route path="customers" element={<AdminCustomers />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
