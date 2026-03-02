import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import SuccessPage from './components/SuccessPage';

export default function App() {
  const [view, setView] = useState<'landing' | 'success'>('landing');

  const handleReserve = () => {
    setView('success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {view === 'landing' ? (
        <LandingPage onReserve={handleReserve} />
      ) : (
        <SuccessPage />
      )}
    </div>
  );
}
