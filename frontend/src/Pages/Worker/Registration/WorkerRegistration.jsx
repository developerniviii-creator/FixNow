import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, UploadCloud, FileCheck2, MapPin, User, Briefcase, FileBadge } from 'lucide-react';
import './workerRegistration.css';

const STEPS = [
  { id: 1, name: 'Personal', icon: <User size={16} /> },
  { id: 2, name: 'Address', icon: <MapPin size={16} /> },
  { id: 3, name: 'Professional', icon: <Briefcase size={16} /> },
  { id: 4, name: 'Identity', icon: <FileBadge size={16} /> }
];

export default function WorkerRegistration() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    mobileNumber: '',
    dob: '',
    gender: '',
    // Step 2
    doorNo: '',
    streetName: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    // Step 3
    serviceCategory: '',
    experience: '',
    serviceArea: '',
    availableTime: '',
    // Step 4
    aadhaarNumber: '',
    aadhaarFile: null,
    profilePhoto: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    // Simulate API call to save data
    console.log("Saving Worker Data to DB:", formData);
    setIsSubmitted(true);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  // ── Render Step Content ──
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h2 className="step-title">Personal Information</h2>
            <div className="reg-form-grid">
              <div className="reg-group">
                <label>Full Name</label>
                <input type="text" name="fullName" className="reg-input" value={formData.fullName} onChange={handleChange} placeholder="As per ID Proof" />
              </div>
              <div className="reg-group">
                <label>Mobile Number</label>
                <input type="tel" name="mobileNumber" className="reg-input" value={formData.mobileNumber} onChange={handleChange} placeholder="+91 xxxxx xxxxx" />
              </div>
              <div className="reg-group">
                <label>Date of Birth</label>
                <input type="date" name="dob" className="reg-input" value={formData.dob} onChange={handleChange} />
              </div>
              <div className="reg-group">
                <label>Gender</label>
                <select name="gender" className="reg-select" value={formData.gender} onChange={handleChange}>
                  <option value="" disabled>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h2 className="step-title">Address Details</h2>
            <div className="reg-form-grid">
              <div className="reg-group">
                <label>Door No.</label>
                <input type="text" name="doorNo" className="reg-input" value={formData.doorNo} onChange={handleChange} placeholder="e.g. 42/1" />
              </div>
              <div className="reg-group">
                <label>Street Name</label>
                <input type="text" name="streetName" className="reg-input" value={formData.streetName} onChange={handleChange} placeholder="e.g. Main Street" />
              </div>
              <div className="reg-group full-width" style={{ gridColumn: '1 / -1' }}>
                <label>Area / Locality</label>
                <input type="text" name="area" className="reg-input" value={formData.area} onChange={handleChange} placeholder="e.g. Anna Nagar" />
              </div>
              <div className="reg-group">
                <label>City</label>
                <input type="text" name="city" className="reg-input" value={formData.city} onChange={handleChange} />
              </div>
              <div className="reg-group">
                <label>State</label>
                <input type="text" name="state" className="reg-input" value={formData.state} onChange={handleChange} />
              </div>
              <div className="reg-group">
                <label>Pincode</label>
                <input type="text" name="pincode" className="reg-input" value={formData.pincode} onChange={handleChange} />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="step-content">
            <h2 className="step-title">Professional Details</h2>
            <div className="reg-form-grid full">
              <div className="reg-group">
                <label>Service Category</label>
                <select name="serviceCategory" className="reg-select" value={formData.serviceCategory} onChange={handleChange}>
                  <option value="" disabled>Select Trade...</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Electrician">Electrician</option>
                  <option value="AC Mechanic">AC Mechanic</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Painter">Painter</option>
                  <option value="Cleaner">Cleaning Service</option>
                </select>
              </div>
              <div className="reg-group">
                <label>Years of Experience</label>
                <select name="experience" className="reg-select" value={formData.experience} onChange={handleChange}>
                  <option value="" disabled>Select Experience...</option>
                  <option value="0-2">0 - 2 Years</option>
                  <option value="3-5">3 - 5 Years</option>
                  <option value="5-10">5 - 10 Years</option>
                  <option value="10+">10+ Years</option>
                </select>
              </div>
              <div className="reg-group">
                <label>Service Area (Cities/Locations)</label>
                <input type="text" name="serviceArea" className="reg-input" value={formData.serviceArea} onChange={handleChange} placeholder="e.g. Chennai, Tambaram, Guindy" />
              </div>
              <div className="reg-group">
                <label>Available Time</label>
                <input type="text" name="availableTime" className="reg-input" value={formData.availableTime} onChange={handleChange} placeholder="e.g. 9:00 AM - 6:00 PM (Mon-Sat)" />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="step-content">
            <h2 className="step-title">Identity Verification</h2>
            <div className="reg-form-grid full">
              <div className="reg-group">
                <label>Aadhaar Number / Government ID Number</label>
                <input type="text" name="aadhaarNumber" className="reg-input" value={formData.aadhaarNumber} onChange={handleChange} placeholder="xxxx xxxx xxxx" />
              </div>
              
              <div className="reg-group">
                <label>Upload Aadhaar or ID Proof</label>
                <div className="file-upload-box">
                  <UploadCloud size={32} className="file-upload-icon" />
                  <div className="file-upload-text">Click to upload or drag and drop</div>
                  <div className="file-upload-sub">PDF, JPG or PNG (max. 5MB)</div>
                </div>
              </div>

              <div className="reg-group">
                <label>Upload Profile Photo</label>
                <div className="file-upload-box">
                  <User size={32} className="file-upload-icon" />
                  <div className="file-upload-text">Upload a clear photo of yourself</div>
                  <div className="file-upload-sub">JPG or PNG (max. 2MB)</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // ── Success Screen ──
  if (isSubmitted) {
    return (
      <div className="reg-page-container">
        <div className="reg-card waiting-screen">
          <div className="waiting-icon">
            <FileCheck2 size={40} />
          </div>
          <h2>Application Under Review</h2>
          <p>
            Thank you for registering with FIX NOW. Your application has been successfully submitted and stored securely. 
            Our team is currently verifying your documents. We will notify you via SMS/Email once your professional account is approved.
          </p>
          <button className="btn-primary" onClick={handleGoHome}>Return to Homepage</button>
        </div>
      </div>
    );
  }

  // ── Main UI ──
  return (
    <div className="reg-page-container">
      {/* ── Cute Background Animations ── */}
      <div className="cute-bg-elements">
        <div className="cute-element el-1"><Briefcase size={40} /></div>
        <div className="cute-element el-2"><User size={48} /></div>
        <div className="cute-element el-3"><MapPin size={36} /></div>
        <div className="cute-element el-4"><FileBadge size={44} /></div>
        <div className="cute-element el-5"><Check size={32} /></div>
      </div>

      <div className="reg-card">
        
        <div className="reg-header">
          <h1>Professional Registration</h1>
          <p>Complete your profile to start accepting service requests.</p>
          
          <div className="stepper-container">
            <div className="stepper-line"></div>
            <div className="stepper-progress" style={{ width: `${((currentStep - 1) / 3) * 100}%` }}></div>
            
            {STEPS.map((step) => (
              <div 
                key={step.id} 
                className={`step-indicator ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
                title={step.name}
              >
                {currentStep > step.id ? <Check size={16} /> : step.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="reg-body">
          {renderStepContent()}
        </div>

        <div className="reg-footer">
          {currentStep > 1 ? (
            <button className="btn-secondary" onClick={handleBack}>Back</button>
          ) : <div></div>}
          
          {currentStep < 4 ? (
            <button className="btn-primary" onClick={handleNext}>Next Step</button>
          ) : (
            <button className="btn-primary" onClick={handleSubmit}>Register Application</button>
          )}
        </div>

      </div>
    </div>
  );
}
