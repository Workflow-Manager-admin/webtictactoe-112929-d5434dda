import React, { useState } from 'react';
import './TicTacToe.css';

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * Main Tic-Tac-Toe board container.
   * Handles game state, turn state, win/tie detection, and grid interactions.
   */

  // Game state: 9 elements for 3x3 grid, 'X', 'O', or null.
  const [squares, setSquares] = useState(Array(9).fill(null));
  // Track player turn
  const [xIsNext, setXIsNext] = useState(true);
  // Track if game is finished
  const winner = calculateWinner(squares);
  const isBoardFull = squares.every(Boolean);
  const isTie = !winner && isBoardFull;

  // PUBLIC_INTERFACE
  function handleSquareClick(idx) {
    /**
     * Processes a player click on a board square.
     */
    if (squares[idx] || winner) return; // Do not override filled squares or after game is won
    const newSquares = squares.slice();
    newSquares[idx] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }

  // Status line
  let status;
  if (winner) {
    status = (
      <span>
        Winner: <span className="ttt-winner">{winner}</span>
      </span>
    );
  } else if (isTie) {
    status = <span>It's a tie!</span>;
  } else {
    status = (
      <span>
        Next turn: <span className="ttt-player">{xIsNext ? 'X' : 'O'}</span>
      </span>
    );
  }

  // Board rendering
  function renderSquare(idx) {
    return (
      <button
        className={`ttt-square${squares[idx] ? ' ttt-filled' : ''}`}
        onClick={() => handleSquareClick(idx)}
        aria-label={`cell ${Math.floor(idx / 3) + 1},${(idx % 3) + 1}`}
        key={idx}
      >
        {squares[idx]}
      </button>
    );
  }

  return (
    <div className="ttt-outer-container">
      <div className="ttt-status">{status}</div>
      <div className="ttt-board">
        {[0, 1, 2].map(row =>
          <div className="ttt-row" key={row}>
            {[0, 1, 2].map(col => renderSquare(row * 3 + col))}
          </div>
        )}
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function calculateWinner(squares) {
  /**
   * Checks for a winning line and returns 'X' or 'O', or null if no winner.
   */
  const lines = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // cols
    [0,4,8],[2,4,6],         // diags
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
