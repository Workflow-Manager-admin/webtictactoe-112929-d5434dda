import React from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main application container, contains header and TicTacToe game.
   */
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <span />
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div style={{ minHeight: '72vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1 className="title" style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2.3rem', fontWeight: 600, letterSpacing: '0.012em' }}>
              WebTicTacToe
            </h1>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;