import React from 'react';
import './ColorBox.css';

function ColorBox(props) {
  const { r, g, b } = props.winning;
  const winningColor = `${r.toString()}, ${g.toString()}, ${b.toString()}`;

  return (
    <div
      className="square"
      onClick={
        props.hasWon
          ? () => {
              return;
            }
          : () => props.checkIsWinningBox(props.color)
      }
      style={{
        background: props.hasWon
          ? `rgb(${winningColor})`
          : `rgb(${props.bgColor})`,
        width: '200px',
        height: '200px',
      }}
    ></div>
  );
}

export default ColorBox;
