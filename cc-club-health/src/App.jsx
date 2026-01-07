import React, { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);

  // This container now forces the height to 100% of the viewport
  const pageStyle = {
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
    width: '100vw',
    backgroundColor: '#90EE90', // Light green
    color: 'white',
    fontFamily: 'system-ui, sans-serif',
    textAlign: 'center',
    overflow: 'hidden'
  };

  const heartStyle = {
    fontSize: '7rem',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'transform 0.1s',
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.1))'
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Health Check: Active!</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Keep the heart beating by clicking it.</p>
      
      <div 
        style={heartStyle} 
        onClick={() => setScore(score + 1)}
        onMouseDown={(e) => e.target.style.transform = 'scale(1.2)'}
        onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
      >
        ❤️
      </div>
      
      <h2 style={{ fontSize: '2rem' }}>Beats: {score}</h2>
      
      <div style={{ 
        marginTop: '30px', 
        padding: '15px 25px', 
        border: '2px solid white', 
        borderRadius: '10px',
        fontWeight: 'bold'
      }}>
        Status: Healthy & Running
      </div>
    </div>
  );
}

export default App;