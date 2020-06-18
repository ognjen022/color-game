import React from 'react';
import './StripeBar.css';

function StripeBar(props) {
  return (
    <div className="stripe">
      <button onClick={props.newGame}>
        {props.hasWon ? 'Play Again?' : 'New Colors'}
      </button>
      <span className="message">{props.stripeText}</span>
      <button
        className={props.mode === 'easy' ? 'selected' : ''}
        onClick={props.changeToEasy}
      >
        Easy
      </button>
      <button
        className={props.mode === 'hard' ? 'selected' : ''}
        onClick={props.changeToHard}
      >
        Hard
      </button>
    </div>
  );
}

export default StripeBar;
