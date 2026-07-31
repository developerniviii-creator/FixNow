import React, { useState } from 'react';
import {
  Layers,
  Wrench,
  Sparkles,
  Calendar,
  MapPin,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  User,
  Phone,
  Check,
  RefreshCw,
  Clock,
  AlertTriangle,
  Shield,
  Zap,
  CheckCircle2,
  SlidersHorizontal,
  FileText
} from 'lucide-react';
import CustomerHeader from '../../../Components/Customer/Header/CustomerHeader';
import CustomerFooter from '../../../Components/Customer/Footer/CustomerFooter';
import './NeedService.css';

/* ── Service Catalog & Addons ────────────────────── */
const SERVICES = [
  { id: 'plumbing', name: 'Plumbing Services', icon: '🚰' },
  { id: 'electrical', name: 'Electrical Repair & Wiring', icon: '⚡' },
  { id: 'ac', name: 'AC Repair & Service', icon: '❄️' },
  { id: 'cleaning', name: 'Home Deep Cleaning', icon: '🧹' },
  { id: 'carpentry', name: 'Carpentry & Furniture', icon: '🪚' },
  { id: 'painting', name: 'Wall Painting & Waterproofing', icon: '🎨' },
  { id: 'pest', name: 'Pest Control Treatment', icon: '🛡️' },
  { id: 'cctv', name: 'CCTV & Smart Home Setup', icon: '📹' },
];

const ADDONS_BY_SERVICE = {
  'Plumbing Services': [
    { id: 'add_1', name: 'Pipe Leakage Inspection', price: 15, time: '20 min' },
    { id: 'add_2', name: 'Drainage De-clogging', price: 25, time: '30 min' },
    { id: 'add_3', name: 'Sanitaryware Installation', price: 30, time: '45 min' },
  ],
  'Electrical Repair & Wiring': [
    { id: 'add_4', name: 'Safety Fuse Check', price: 10, time: '15 min' },
    { id: 'add_5', name: 'Appliance Point Wiring', price: 20, time: '30 min' },
    { id: 'add_6', name: 'MCB / DB Box Diagnostics', price: 35, time: '40 min' },
  ],
  'AC Repair & Service': [
    { id: 'add_7', name: 'Anti-Bacterial Jet Foam Wash', price: 29, time: '35 min' },
    { id: 'add_8', name: 'Gas Pressure Top-up', price: 45, time: '30 min' },
    { id: 'add_9', name: 'Copper Pipe Insulation Check', price: 18, time: '20 min' },
  ],
  'Home Deep Cleaning': [
    { id: 'add_10', name: 'Upholstery & Sofa Sanitization', price: 35, time: '45 min' },
    { id: 'add_11', name: 'Chimney Degreasing', price: 25, time: '30 min' },
    { id: 'add_12', name: 'Balcony High-Pressure Wash', price: 20, time: '25 min' },
  ],
};

/* ── AI Quick-Fill Templates ────────────────────── */
const TEMPLATES = {
  'Plumbing Services': [
    'Leaking faucet in kitchen sink causing water wastage',
    'Clogged bathroom drain with slow water clearance',
    'Low water pressure across all bathroom showers',
    'New mixer tap installation in master bedroom',
  ],
  'Electrical Repair & Wiring': [
    'Frequent short circuits when turning on heavy appliances',
    'Smart ceiling fan & wall switch setup required',
    'Power socket burnt out - needs replacement',
    'Full DB box safety inspection & ground check',
  ],
  'AC Repair & Service': [
    'AC not cooling despite setting temperature to 16 °C',
    'Water dripping from indoor split AC unit',
    'Rattling noise coming from outdoor compressor',
    'Deep filter cleaning and gas pressure check',
  ],
  'Home Deep Cleaning': [
    'Complete 3 BHK apartment deep cleaning required',
    'Kitchen oil stains, cabinets & chimney cleaning',
    'Sofa & upholstery shampooing (5-seater set)',
    'Balcony floor scrub & window glass cleaning',
  ],
};

/* ── AI Contextual Hints per Step ────────────────── */
const AI_STEP_HINTS = [
  "Select your core service category. FixNow AI matches certified technicians specialized in this domain.",
  "Describe the exact problem or tap an AI smart template to instantly auto-fill common issue details.",
  "Enhance your service with verified add-ons for comprehensive care & preventative maintenance.",
  "Pick your convenient date & time slot. Morning slots offer fastest pro assignment.",
  "Enter precise address details or tap 'Detect Location' for GPS pin auto-detection.",
  "Review complete service summary, select priority options & confirm your instant booking."
];

/* ── Dynamic Date Generator ─────────────────────── */
const buildDates = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      day: i === 0 ? 'Today' : i === 1 ? 'Tmrw' : days[d.getDay()],
      num: d.getDate(),
      mon: mons[d.getMonth()],
    };
  });
};

/* ── Time Slots & Severities ─────────────────────── */
const SLOTS = [
  { name: 'Morning', time: '09:00 – 12:00', badge: null },
  { name: 'Afternoon', time: '12:00 – 15:00', badge: null },
  { name: 'Evening', time: '15:00 – 18:00', badge: null },
  { name: 'Prime Night', time: '18:00 – 21:00', badge: '+$15' },
];

const SEVERITIES = [
  { key: 'Low', label: 'Routine', desc: 'Standard turnaround', icon: <Shield size={16} /> },
  { key: 'Medium', label: 'Urgent', desc: 'Priority queue', icon: <AlertTriangle size={16} /> },
  { key: 'Critical', label: 'Emergency', desc: 'Instant dispatch', icon: <Zap size={16} /> },
];

export default function NeedService({ navigateToHome, initialService = 'Plumbing Services' }) {
  const safe = (v) => {
    if (typeof v === 'string') return v;
    if (v && typeof v === 'object') return v.name || v.title || v.serviceType || 'Plumbing Services';
    return 'Plumbing Services';
  };

  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [locating, setLocating] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    service: safe(initialService),
    issue: '',
    severity: 'Low',
    selectedAddons: [],
    dateIdx: 0,
    slotIdx: 0,
    express: false,
    name: '',
    phone: '',
    door: '',
    street: '',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pin: '',
  });

  const dates = buildDates();

  const set = (key, val) => {
    setForm((p) => ({ ...p, [key]: val }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: '' }));
  };

  const onText = (e) => set(e.target.name, e.target.value);

  const toggleAddon = (addonId) => {
    setForm((p) => {
      const exists = p.selectedAddons.includes(addonId);
      return {
        ...p,
        selectedAddons: exists
          ? p.selectedAddons.filter((id) => id !== addonId)
          : [...p.selectedAddons, addonId],
      };
    });
  };

  const validate = () => {
    const e = {};
    if (step === 0 && !form.service) e.service = 'Please select a service.';
    if (step === 1 && !form.issue.trim()) e.issue = 'Please describe the issue or choose a template.';
    if (step === 4) {
      if (!form.name.trim()) e.name = 'Full name is required.';
      if (!form.phone.trim()) e.phone = 'Mobile number is required.';
      if (!form.door.trim()) e.door = 'Door / Flat No. required.';
      if (!form.street.trim()) e.street = 'Street address required.';
      if (!form.pin.trim()) e.pin = 'Pincode is required.';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => { if (validate() && step < 5) setStep(step + 1); };
  const prev = () => { if (step > 0) setStep(step - 1); };

  const submit = () => {
    if (!validate()) return;
    setDone(true);
    setTimeout(() => { window.location.href = '/connect'; }, 2200);
  };

  const detectLoc = () => {
    setLocating(true);
    setTimeout(() => {
      setForm((p) => ({
        ...p,
        door: 'Bldg 4B, Flat 302',
        street: 'Kaveri St, Saligramam',
        city: 'Chennai',
        state: 'Tamil Nadu',
        pin: '600093',
      }));
      setErrors({});
      setLocating(false);
    }, 1200);
  };

  const STEPS = [
    { label: 'Category', icon: <Layers size={15} /> },
    { label: 'Issue', icon: <Wrench size={15} /> },
    { label: 'Add-ons', icon: <SlidersHorizontal size={15} /> },
    { label: 'Schedule', icon: <Calendar size={15} /> },
    { label: 'Location', icon: <MapPin size={15} /> },
    { label: 'Confirm', icon: <ShieldCheck size={15} /> },
  ];

  const currentAddonsList = ADDONS_BY_SERVICE[form.service] || [
    { id: 'gen_1', name: 'General Diagnostic Inspection', price: 15, time: '20 min' },
    { id: 'gen_2', name: 'Full Safety Check', price: 20, time: '25 min' },
  ];

  const calculateAddonTotal = () => {
    return currentAddonsList
      .filter((item) => form.selectedAddons.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <div className="need-service-page">
      <CustomerHeader
        currentCity="Chennai"
        setCurrentCity={() => {}}
        activeBookingsCount={0}
        onOpenBookings={() => {}}
        onBookService={() => {}}
        isLoggedIn={false}
        onLoginClick={() => {}}
        onLogout={() => {}}
        onNavigateToHome={navigateToHome}
      />

      <main className="need-service-main">
        {done ? (
          <div className="success-wrap">
            <div className="success-ring"><Check size={44} strokeWidth={3} /></div>
            <h2 className="success-h">Booking Confirmed!</h2>
            <p className="success-p">
              We are dispatching a certified {form.service} specialist to your address in {form.city}.
            </p>
            <div className="loader-dots">
              <span className="ld" /><span className="ld" /><span className="ld" />
              <span>Matching Specialist…</span>
            </div>
          </div>
        ) : (
          <>
            <div className="booking-hero">
              <button type="button" className="btn-back-global" onClick={navigateToHome} style={{ marginBottom: '16px' }}>
                <ChevronLeft size={16} /> Back to Home
              </button>
              <br />
              <span className="booking-hero-badge">
                <Sparkles size={12} /> FixNow AI Workflow
              </span>
              <h1>Home Service Marketplace</h1>
              <p>Experience a seamless 6-step booking flow crafted for speed, clarity, and reliability.</p>
            </div>

            {/* 6-Step Progress Rail */}
            <div className="progress-rail">
              {STEPS.map((s, i) => (
                <React.Fragment key={i}>
                  <div
                    className={`progress-step ${step === i ? 'is-active' : ''} ${step > i ? 'is-done' : ''}`}
                    onClick={() => { if (i < step) setStep(i); }}
                  >
                    <div className="progress-dot-wrapper">
                      <div className="progress-dot">
                        {step > i ? <Check size={14} strokeWidth={3} /> : s.icon}
                      </div>
                      <span className="progress-dot-label">{s.label}</span>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="progress-connector">
                      <div className="progress-connector-fill" style={{ width: step > i ? '100%' : '0%' }} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Main Glass Card */}
            <div className="booking-card">
              <div className="ai-hint">
                <Sparkles size={16} className="ai-hint-icon" />
                <span>{AI_STEP_HINTS[step]}</span>
              </div>

              {/* STEP 1: Category */}
              {step === 0 && (
                <div className="step-panel">
                  <h2 className="step-heading">Select Service Category</h2>
                  <p className="step-subtext">Choose the primary service you require assistance with.</p>
                  <div className="service-grid">
                    {SERVICES.map((s) => (
                      <div
                        key={s.id}
                        className={`service-card ${form.service === s.name ? 'selected' : ''}`}
                        onClick={() => set('service', s.name)}
                      >
                        <span className="service-emoji">{s.icon}</span>
                        <span className="service-title">{s.name}</span>
                        {form.service === s.name && <CheckCircle2 className="check-icon" size={16} />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Issue Scope & Severity */}
              {step === 1 && (
                <div className="step-panel">
                  <h2 className="step-heading">Describe Your Issue</h2>
                  <p className="step-subtext">Provide details about what needs fixing or pick an AI template.</p>
                  
                  <div className="field-block">
                    <label className="field-label"><Wrench size={14} /> Issue Description</label>
                    <textarea
                      className="field-textarea"
                      name="issue"
                      rows={4}
                      value={form.issue}
                      onChange={onText}
                      placeholder="Describe what is wrong or needs setup..."
                    />
                    {errors.issue && <span className="field-error">{errors.issue}</span>}

                    <div style={{ marginTop: 14 }}>
                      <div className="template-chips-label"><Sparkles size={12} /> AI Quick Smart Templates</div>
                      <div className="template-chips">
                        {(TEMPLATES[form.service] || TEMPLATES['Plumbing Services']).map((t, i) => (
                          <button key={i} type="button" className="template-chip" onClick={() => set('issue', t)}>
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="field-block">
                    <label className="field-label"><AlertTriangle size={14} /> Priority Level</label>
                    <div className="severity-options">
                      {SEVERITIES.map((sv) => (
                        <div
                          key={sv.key}
                          className={`sev-option ${sv.key.toLowerCase()} ${form.severity === sv.key ? 'selected' : ''}`}
                          onClick={() => set('severity', sv.key)}
                        >
                          <div className="sev-icon-circle">{sv.icon}</div>
                          <h4>{sv.label}</h4>
                          <p>{sv.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Add-ons */}
              {step === 2 && (
                <div className="step-panel">
                  <h2 className="step-heading">Custom Add-on Services</h2>
                  <p className="step-subtext">Select optional care add-ons for a comprehensive maintenance package.</p>
                  <div className="addons-grid">
                    {currentAddonsList.map((addon) => {
                      const active = form.selectedAddons.includes(addon.id);
                      return (
                        <div
                          key={addon.id}
                          className={`addon-card ${active ? 'selected' : ''}`}
                          onClick={() => toggleAddon(addon.id)}
                        >
                          <div className="addon-info">
                            <h4>{addon.name}</h4>
                            <span>Est. Time: {addon.time}</span>
                          </div>
                          <div className="addon-price-col">
                            <span className="addon-price">+${addon.price}</span>
                            <span className={`addon-btn ${active ? 'active' : ''}`}>
                              {active ? <Check size={14} /> : '+ Add'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Schedule */}
              {step === 3 && (
                <div className="step-panel">
                  <h2 className="step-heading">Schedule Appointment</h2>
                  <p className="step-subtext">Pick your date and preferred time window.</p>
                  <div className="field-block">
                    <label className="field-label"><Calendar size={14} /> Date Selection</label>
                    <div className="date-carousel">
                      {dates.map((d, i) => (
                        <div key={i} className={`date-tile ${form.dateIdx === i ? 'picked' : ''}`} onClick={() => set('dateIdx', i)}>
                          <div className="dt-day">{d.day}</div>
                          <div className="dt-num">{d.num}</div>
                          <div className="dt-month">{d.mon}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="field-block">
                    <label className="field-label"><Clock size={14} /> Preferred Time Window</label>
                    <div className="slot-grid">
                      {SLOTS.map((sl, i) => (
                        <div key={i} className={`slot-card ${form.slotIdx === i ? 'picked' : ''}`} onClick={() => set('slotIdx', i)}>
                          <span className="slot-name">{sl.name}</span>
                          <span className="slot-time">{sl.time}</span>
                          {sl.badge && <span className="slot-badge">{sl.badge}</span>}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="express-banner">
                    <div className="express-left">
                      <div className="express-zap"><Zap size={20} /></div>
                      <div>
                        <div className="express-title">Express Urgent Arrival</div>
                        <div className="express-desc">Technician at doorstep within 45 mins (+$19)</div>
                      </div>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" checked={form.express} onChange={(e) => set('express', e.target.checked)} />
                      <span className="toggle-track" />
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 5: Location */}
              {step === 4 && (
                <div className="step-panel">
                  <h2 className="step-heading">Service Address</h2>
                  <p className="step-subtext">Tell us where the professional should arrive.</p>
                  <div className="form-2col">
                    <div>
                      <label className="field-label"><User size={13} /> Full Name</label>
                      <input className="field-input" name="name" value={form.name} onChange={onText} placeholder="John Doe" />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="field-label"><Phone size={13} /> Mobile Number</label>
                      <input className="field-input" name="phone" type="tel" value={form.phone} onChange={onText} placeholder="+91 98765 43210" />
                      {errors.phone && <span className="field-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-2col">
                    <div>
                      <label className="field-label">Flat / House / Door No.</label>
                      <input className="field-input" name="door" value={form.door} onChange={onText} placeholder="Door 4B, Sky Towers" />
                      {errors.door && <span className="field-error">{errors.door}</span>}
                    </div>
                    <div>
                      <label className="field-label">Street Address</label>
                      <input className="field-input" name="street" value={form.street} onChange={onText} placeholder="Grand Main Street" />
                      {errors.street && <span className="field-error">{errors.street}</span>}
                    </div>
                  </div>

                  <div className="form-3col">
                    <div>
                      <label className="field-label">City</label>
                      <input className="field-input" name="city" value={form.city} onChange={onText} />
                    </div>
                    <div>
                      <label className="field-label">State</label>
                      <input className="field-input" name="state" value={form.state} onChange={onText} />
                    </div>
                    <div>
                      <label className="field-label">Pincode</label>
                      <input className="field-input" name="pin" value={form.pin} onChange={onText} placeholder="600001" />
                      {errors.pin && <span className="field-error">{errors.pin}</span>}
                    </div>
                  </div>

                  <div className="map-visual">
                    <div className="map-dots" />
                    <div className="map-pin-anim"><MapPin size={34} fill="var(--fn-accent)" color="white" /></div>
                    <button type="button" className="map-locate-btn" onClick={detectLoc} disabled={locating}>
                      <RefreshCw size={12} className={locating ? 'animate-spin' : ''} />
                      {locating ? 'Detecting...' : 'Detect Location'}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 6: Confirmation Summary */}
              {step === 5 && (
                <div className="step-panel">
                  <h2 className="step-heading">Booking Summary</h2>
                  <p className="step-subtext">Review your service details before confirming dispatch.</p>
                  
                  <div className="summary-box">
                    <div className="summary-row">
                      <span className="sum-label"><Layers size={14} /> Service</span>
                      <span className="sum-val">{form.service}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label"><FileText size={14} /> Description</span>
                      <span className="sum-val text-truncate">{form.issue || 'Standard Inspection'}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label"><AlertTriangle size={14} /> Priority</span>
                      <span className={`sum-badge ${form.severity.toLowerCase()}`}>{form.severity}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label"><SlidersHorizontal size={14} /> Add-ons Total</span>
                      <span className="sum-val">+${calculateAddonTotal()}</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label"><Calendar size={14} /> Scheduled</span>
                      <span className="sum-val">{dates[form.dateIdx]?.day}, {dates[form.dateIdx]?.num} {dates[form.dateIdx]?.mon} ({SLOTS[form.slotIdx]?.name})</span>
                    </div>
                    <div className="summary-row">
                      <span className="sum-label"><MapPin size={14} /> Address</span>
                      <span className="sum-val">{form.door}, {form.street}, {form.city}</span>
                    </div>
                    {form.express && (
                      <div className="summary-row express-highlight">
                        <span className="sum-label"><Zap size={14} /> Priority Express</span>
                        <span className="sum-val">+ $19 (Arrival in &lt;45 min)</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="nav-row">
                <button type="button" className="nav-btn back" onClick={step === 0 ? navigateToHome : prev}>
                  <ChevronLeft size={16} />
                  {step === 0 ? 'Home' : 'Back'}
                </button>

                {step < 5 ? (
                  <button type="button" className="nav-btn forward" onClick={next}>
                    Next Step <ChevronRight size={16} />
                  </button>
                ) : (
                  <button type="button" className="nav-btn forward submit-final" onClick={submit}>
                    <Check size={16} /> Confirm Booking
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </main>

      <CustomerFooter />
    </div>
  );
}
