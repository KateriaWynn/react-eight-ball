import React, { useState } from 'react';
import getRandomIndex from './helpers';
import './App.css';

const EightBall = ({ answers }) => {
  function handleClick() {
    const { msg, color } = getRandomIndex(answers);

    if (!msg || (msg === undefined && color)) {
      msg = answers[0];
      color = 'green';
    }

    setMsg(msg);
    setColor(color);
  }

  const [msg, setMsg] = useState('Think of a Question');
  const [color, setColor] = useState('black');
  const colorClass =
    color === 'red'
      ? 'red'
      : color === 'goldenrod'
      ? 'goldenrod'
      : color === 'green'
      ? 'green'
      : color;

  return (
    <div className="container">
      <h1>Magic Eight Ball</h1>
      <div
        className={[colorClass, 'eight-ball'].join(' ')}
        onClick={handleClick}
      >
        <div className="text-display">
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
};

export default EightBall;
