import React, { useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  Star, 
  Zap, 
  Headset, 
  CheckCircle2, 
  ArrowRight,
  Search,
  Check,
  CalendarCheck
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const navigate = useNavigate();
  const rowsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Stop observing once visible if you want it to only animate once
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-choose-us-section">
      <div className="why-header">
        <h2>Why Thousands Trust FixNow</h2>
        <p>Your home deserves the best. We connect you with reliable, verified professionals for a hassle-free and transparent service experience.</p>
      </div>

      <div className="why-timeline"></div>

      <div className="why-rows-container">
        
        {/* Row 1 */}
        <div className="why-row" ref={(el) => (rowsRef.current[0] = el)}>
          <div className="why-visual">
            <div className="why-blob">
              <ShieldCheck className="blob-icon" />
            </div>
          </div>
          <div className="why-content">
            <h3>Verified & Background-Checked Professionals</h3>
            <p>Your safety is our top priority. Every professional on FixNow undergoes a rigorous background check and skill assessment before they ever step foot in your home.</p>
            <div className="why-highlight">
              <CheckCircle2 className="why-highlight-icon" size={24} />
              <span className="why-highlight-text">100% Secure & Vetted Experts</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="why-row" ref={(el) => (rowsRef.current[1] = el)}>
          <div className="why-visual">
            <div className="why-blob">
              <Wallet className="blob-icon" />
            </div>
          </div>
          <div className="why-content">
            <h3>Transparent, No-Hidden-Cost Pricing</h3>
            <p>No more negotiating or unexpected bills. We provide clear, upfront pricing comparisons so you know exactly what you are paying for before you hit book.</p>
            <div className="why-highlight">
              <Wallet className="why-highlight-icon" size={24} />
              <span className="why-highlight-text">Standardized Upfront Rates</span>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="why-row" ref={(el) => (rowsRef.current[2] = el)}>
          <div className="why-visual">
            <div className="why-blob">
              <Star className="blob-icon" />
            </div>
          </div>
          <div className="why-content">
            <h3>Real Reviews from Real Customers</h3>
            <p>Don't just take our word for it. Read authentic ratings and reviews from your neighbors to choose the highest-rated professional for the job.</p>
            <div className="why-highlight">
              <Star className="why-highlight-icon" fill="currentColor" size={24} />
              <span className="why-highlight-text">4.8★ Average (10k+ Reviews)</span>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="why-row" ref={(el) => (rowsRef.current[3] = el)}>
          <div className="why-visual">
            <div className="why-blob">
              <Zap className="blob-icon" />
            </div>
          </div>
          <div className="why-content">
            <h3>Book in Under 60 Seconds</h3>
            <p>Home emergencies can't wait. Our streamlined platform allows you to find a pro, compare their rates, and lock in your timeslot in under a minute.</p>
            <div className="why-highlight">
              <span className="why-highlight-step">
                <Search size={16} color="#f59e0b" /> Search
              </span>
              <ArrowRight className="why-highlight-arrow" size={14} />
              <span className="why-highlight-step">
                <Check size={16} color="#f59e0b" /> Compare
              </span>
              <ArrowRight className="why-highlight-arrow" size={14} />
              <span className="why-highlight-step-final">
                <CalendarCheck size={16} color="#f59e0b" /> Book
              </span>
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <div className="why-row" ref={(el) => (rowsRef.current[4] = el)}>
          <div className="why-visual">
            <div className="why-blob">
              <Headset className="blob-icon" />
            </div>
          </div>
          <div className="why-content">
            <h3>24/7 Support & On-Time Guarantee</h3>
            <p>Our dedicated support team is always awake, even if you aren't. Plus, if our professionals don't show up on time, your service call is heavily discounted.</p>
            <div className="why-highlight">
              <Headset className="why-highlight-icon" size={24} />
              <span className="why-highlight-text">Always Here to Help</span>
            </div>
          </div>
        </div>

      </div>

      <div className="why-cta-container">
        <button className="why-cta-btn" onClick={() => navigate('/need-service')}>
          Get Started — Book Your Service Now
        </button>
      </div>

    </section>
  );
}
