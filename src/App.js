import React, { useState, useEffect } from 'react';
import Header from './Header';
import StripeBar from './StripeBar';
import ColorBox from './ColorBox';
import './App.css';

function App() {
  const [colors, setColors] = useState([
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
    {
      r: Math.floor(Math.random() * 255).toString(),
      g: Math.floor(Math.random() * 255).toString(),
      b: Math.floor(Math.random() * 255).toString(),
    },
  ]);
  const [mode, setMode] = useState('hard');
  const [winning, setWinning] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  const [stripeText, setStripeText] = useState('');
  const [hasWon, setHasWon] = useState(false);

  const changeToEasy = () => {
    setMode('easy');
  };

  const changeToHard = () => {
    setMode('hard');
  };

  const newGame = () => {
    setHasWon(false);
    setStripeText('');
    if (mode === 'easy') {
      setColors([
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
      ]);
    } else {
      setColors([
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
        {
          r: Math.floor(Math.random() * 255).toString(),
          g: Math.floor(Math.random() * 255).toString(),
          b: Math.floor(Math.random() * 255).toString(),
        },
      ]);
    }
    pickColor();
  };

  const pickColor = () => {
    setWinning(colors[Math.floor(Math.random() * colors.length)]);
  };

  const checkIsWinningBox = (color) => {
    if (color === winning) {
      setHasWon(true);
      setStripeText('Correct!');
    } else {
      setColors(colors.filter((c) => c !== color));
      setWinning(winning);
      setStripeText('Try Again');
    }
  };

  useEffect(() => {
    if (mode === 'easy') {
      if (colors.length === 3) {
        pickColor();
      }
    } else {
      if (colors.length === 6) {
        pickColor();
      }
    }
  }, [colors]);

  useEffect(() => {
    newGame();
  }, []);

  useEffect(() => {
    newGame();
  }, [mode]);

  return (
    <div className="App">
      <Header winning={winning} hasWon={hasWon} />
      <StripeBar
        hasWon={hasWon}
        stripeText={stripeText}
        mode={mode}
        newGame={newGame}
        changeToEasy={changeToEasy}
        changeToHard={changeToHard}
      />
      <div className="container">
        {colors.map((color, i) => {
          const { r, g, b } = color;
          const colorProp = `${r.toString()}, ${g.toString()}, ${b.toString()}`;
          return (
            <ColorBox
              unClickable={color.unClickable}
              winning={winning}
              hasWon={hasWon}
              checkIsWinningBox={checkIsWinningBox}
              id={i}
              key={i}
              color={color}
              bgColor={colorProp}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
