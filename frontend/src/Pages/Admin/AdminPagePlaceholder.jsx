import React from 'react';
import { useLocation } from 'react-router-dom';

export default function AdminPagePlaceholder() {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop();
  
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textTransform: 'capitalize', fontSize: '2rem', marginBottom: '16px' }}>
        {pageName || 'Dashboard'}
      </h1>
      <div style={{ 
        background: 'rgba(255, 255, 255, 0.05)', 
        border: '1px solid rgba(255, 255, 255, 0.1)', 
        borderRadius: '16px', 
        padding: '40px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#94a3b8' }}>
          This is the placeholder for the <strong>{pageName}</strong> module. 
          Real content will be implemented here soon!
        </p>
      </div>
    </div>
  );
}
