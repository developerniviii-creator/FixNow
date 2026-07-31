import React, { useState, useEffect } from 'react';
import CustomerHeader from '../../../Components/Customer/Header/CustomerHeader';
import CustomerFooter from '../../../Components/Customer/Footer/CustomerFooter';
import './Home.css';
import Login from '../Login/login';
import WhyChooseUs from '../../../Components/Customer/Home/WhyChooseUs';

// Import Service Images
import plumberImg from '../../../assets/Services/plumber.jpg';
import electricianImg from '../../../assets/Services/electrician.jpg';
import acImg from '../../../assets/Services/AC.jpg';
import cleaningImg from '../../../assets/Services/Home Deep cleaning.jpg';
import carpentryImg from '../../../assets/Services/Carpendor.jpg';
import paintingImg from '../../../assets/Services/painting.png';
import pestImg from '../../../assets/Services/pest.jpg';
import smartImg from '../../../assets/Services/smart.jpg';

// SVG Icons
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconMapPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const IconHome = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconBuilding = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="6" x2="9.01" y2="6"></line><line x1="15" y1="6" x2="15.01" y2="6"></line><line x1="9" y1="10" x2="9.01" y2="10"></line><line x1="15" y1="10" x2="15.01" y2="10"></line><line x1="9" y1="14" x2="9.01" y2="14"></line><line x1="15" y1="14" x2="15.01" y2="14"></line><line x1="9" y1="18" x2="15" y2="18"></line>
  </svg>
);

const IconNavigation = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
  </svg>
);

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const IconSparkles = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z"></path>
  </svg>
);

const IconCheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const IconCross = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const IconChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const IconChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

// Services Catalog (Price and Badges removed as per user request)
const SERVICES_CATALOG = [
  {
    id: 'plumbing',
    name: 'Plumbing Services',
    icon: '🚰',
    image: plumberImg,
    category: 'Repair',
    rating: '4.9',
    reviews: '2,430',
    description: 'Tap leaks, pipe blockage, basin installation, water tank cleaning & bathroom fittings.'
  },
  {
    id: 'electrical',
    name: 'Electrical Repair & Wiring',
    icon: '⚡',
    image: electricianImg,
    category: 'Electrical',
    rating: '4.85',
    reviews: '1,890',
    description: 'Switchboard repair, ceiling fan installation, short circuit fix, breaker replacement & light fittings.'
  },
  {
    id: 'ac_repair',
    name: 'AC Repair & Service',
    icon: '❄️',
    image: acImg,
    category: 'Repair',
    rating: '4.95',
    reviews: '3,120',
    description: 'Foam jet deep cleaning, gas refill, cooling issue resolution, PCB repair & uninstallation.'
  },
  {
    id: 'deep_cleaning',
    name: 'Home Deep Cleaning',
    icon: '🧹',
    image: cleaningImg,
    category: 'Cleaning',
    rating: '4.88',
    reviews: '4,050',
    description: 'Full home sanitization, kitchen deep degreasing, bathroom scrubbing & sofa shampooing.'
  },
  {
    id: 'carpentry',
    name: 'Carpentry & Furniture',
    icon: '🔨',
    image: carpentryImg,
    category: 'Repair',
    rating: '4.80',
    reviews: '1,420',
    description: 'Door lock replacement, modular furniture assembly, wardrobe hinge fix & bed repair.'
  },
  {
    id: 'painting',
    name: 'Wall Painting & Waterproofing',
    icon: '🎨',
    image: paintingImg,
    category: 'Cleaning',
    rating: '4.91',
    reviews: '980',
    description: 'Interior wall painting, accent texture wall design, damp patch treatment & exterior coating.'
  },
  {
    id: 'pest_control',
    name: 'Pest Control Treatment',
    icon: '🪰',
    image: pestImg,
    category: 'Cleaning',
    rating: '4.86',
    reviews: '1,650',
    description: 'Odorless cockroach gel, termite treatment, bedbug extermination & mosquito barrier control.'
  },
  {
    id: 'smart_home',
    name: 'CCTV & Smart Home Setup',
    icon: '🔒',
    image: smartImg,
    category: 'Electrical',
    rating: '4.93',
    reviews: '820',
    description: 'CCTV camera installation, smart door lock setup, video doorbell fitting & WiFi router configuration.'
  }
];

// Testimonials Data for Carousel
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    city: 'Chennai',
    review: 'Plumber arrived in 30 mins! Fixed my kitchen pipe leak effortlessly. Professional and clean work.',
    service: 'Plumbing Repair',
    rating: '5.0'
  },
  {
    id: 2,
    name: 'Rajesh Nair',
    city: 'Bengaluru',
    review: 'AC Foam Jet cleaning was fantastic. My electricity bill dropped and cooling is instant!',
    service: 'AC Service',
    rating: '5.0'
  },
  {
    id: 3,
    name: 'Kavitha R',
    city: 'Hyderabad',
    review: 'Booking process was so smooth. The map location picker prefilled my exact landmark without hassle.',
    service: 'Electrical Wiring',
    rating: '5.0'
  },
  {
    id: 4,
    name: 'Anish Verma',
    city: 'Mumbai',
    review: 'Top class deep cleaning service! My sofa set looks brand new again. Highly recommended marketplace.',
    service: 'Home Deep Cleaning',
    rating: '5.0'
  }
];

export default function Home({ navigateToConnect, navigateToBooking, navigateToNeedService, navigateToMyBookings, activeBookings, setActiveBookings }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCity, setCurrentCity] = useState('Chennai');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [toastMessage, setToastMessage] = useState(null);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const filteredServices = SERVICES_CATALOG.filter((s) => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-container">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <IconCheckCircle />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* REUSABLE CUSTOMER HEADER COMPONENT */}
      <CustomerHeader
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        activeBookingsCount={activeBookings.length}
        onOpenBookings={navigateToMyBookings}
        onBookService={() => navigateToBooking('Plumbing Services')}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLoginModal(true)}
        onLogout={() => {
          setIsLoggedIn(false);
          triggerToast('👋 Signed out successfully.');
        }}
        onNavigateToConnect={navigateToConnect}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">
          Top Rated Home Services, <br />
          <span>Delivered Right To Your Doorstep</span>
        </h1>

        <p className="hero-subtitle">
          Book trusted plumbers, electricians, AC technicians, and cleaning specialists in {currentCity}.
        </p>

        {/* Hero Search Bar */}
        <div className="hero-search-wrapper">
          <div className="hero-search-bar">
            <div className="search-input-group">
              <IconSearch />
              <input
                type="text"
                placeholder="Search services (e.g. AC Repair, Leaking Tap, Deep Cleaning...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-hero-search" onClick={navigateToNeedService} style={{ marginLeft: '10px', background: 'linear-gradient(135deg, #8b5cf6, #6366f1)' }}>
              <span>Need Service</span>
            </button>
          </div>
        </div>

        {/* NOTE: "Popular right now" tags REMOVED as per user request */}
      </section>

      {/* Active Bookings Status Banner removed as requested. Home page only shows services. */}

      {/* Main Services Grid Section */}
      <main className="content-wrapper">
        <div className="section-header">
          <div className="section-title-group">
            <h2>Explore Our Services</h2>
            <p>Select a service to view availability and instant booking in {currentCity}</p>
          </div>

          <div className="category-filter-tabs">
            {['All', 'Repair', 'Electrical', 'Cleaning'].map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid (Badge tags & Prices removed as per user request) */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.name} className="service-image" />
                <div className="service-icon-box">{service.icon}</div>
              </div>

              <div className="service-card-content">
                <div className="service-default-view">
                  <h3 className="service-title">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                <div className="service-hover-view">
                  <div className="service-meta-info">
                    <span className="service-rating">
                      <IconStar /> {service.rating}
                    </span>
                    <span>({service.reviews} Bookings)</span>
                  </div>
                  <div className="service-card-footer">
                    <button className="btn-book-card" onClick={() => navigateToNeedService(service.name)}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CAROUSEL TESTIMONIALS SECTION (As requested by user) */}
      <section className="content-wrapper" style={{ marginTop: '60px' }}>
        <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-title-group">
            <h2>Customer Stories</h2>
            <p>Read what happy homeowners say about our service</p>
          </div>
        </div>

        <div className="testimonials-marquee-wrapper">
          <div className="testimonials-marquee-track">
            {/* Render array multiple times to create a seamless infinite loop */}
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
              <div className="testimonial-card" key={`${testimonial.id}-${idx}`}>
                <div className="testimonial-quote-icon">“</div>
                <p className="testimonial-text">{testimonial.review}</p>
                <div className="testimonial-author-box">
                  <div className="testimonial-author-name">{testimonial.name}</div>
                  <div className="testimonial-author-meta">
                    {testimonial.city} • <span style={{ color: '#fbbf24' }}>★ {testimonial.rating}</span>
                  </div>
                  <div className="testimonial-service-tag">
                    {testimonial.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal removed. Flow moved to booking page. */}

      {/* MyBookings modal removed — now a dedicated page at /mybookings */}

      {/* LOGIN MODAL */}
      {showLoginModal && (
        <div className="modal-overlay" onClick={() => setShowLoginModal(false)}>
          <div className="login-modal-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-modal" style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 1010 }} onClick={() => setShowLoginModal(false)}>
              <IconCross />
            </button>
            <Login onLoginSuccess={(username) => {
              setIsLoggedIn(true);
              setShowLoginModal(false);
              triggerToast(`🎉 Welcome back, ${username}!`);
            }} />
          </div>
        </div>
      )}

      {/* REUSABLE CUSTOMER FOOTER COMPONENT */}
      <CustomerFooter />
    </div>
  );
}