import React from 'react';
import './Header.css';

function Header(props) {
  const { r, g, b } = props.winning;
  const winningColor = `${r.toString()}, ${g.toString()}, ${b.toString()}`;
  return (
    <div>
      <h1 style={{ background: props.hasWon ? `rgb(${winningColor})` : '' }}>
        The
        <br />
        <span className="colorDisplay">RGB({winningColor})</span>
        <br />
        Color Game
      </h1>
    </div>
  );
}

export default Header;
