// src/App.js
import React, { useState, lazy, Suspense, useCallback } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

// Code Splitting & Lazy Loading: Bundler cuts this file into a separate chunk
const HeavyDashboard = lazy(() => import('./components/HeavyDashboard'));

function App() {
  const [data, setData] = useState([
    { id: 1, value: 100 },
    { id: 2, value: 250 },
    { id: 3, value: 400 }
  ]);

  // Memoizing the handler passed as a prop to keep HeavyDashboard's React.memo active
  const refreshData = useCallback(() => {
    setData([
      { id: 1, value: Math.floor(Math.random() * 500) },
      { id: 2, value: Math.floor(Math.random() * 500) },
      { id: 3, value: Math.floor(Math.random() * 500) }
    ]);
  }, []);

  // Button to trigger an error state for demonstration
  const triggerCrash = () => {
    setData([{ id: 1, value: -99 }]); 
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>React Performance & Resilience Stack</h1>
      <button onClick={triggerCrash} style={{ marginBottom: '15px', marginRight: '10px' }}>
        Force Crash Dashboard
      </button>

      {/* 1. ERROR BOUNDARY: Catches code faults and lazy chunk load failures */}
      <ErrorBoundary>
        
        {/* 2. SUSPENSE: Manages the lazy-loading placeholder state */}
        <Suspense fallback={<div style={{ padding: '20px' }}>⏳ Loading dashboard assets...</div>}>
          
          {/* 3. LAZY COMPONENT WITH MEMOIZATION BUILT IN */}
          <HeavyDashboard items={data} onRefresh={refreshData} />
          
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
