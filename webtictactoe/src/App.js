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
          <div style={{ marginTop: '100px' }}>
            <h1 className="title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>WebTicTacToe</h1>
            <TicTacToe />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;