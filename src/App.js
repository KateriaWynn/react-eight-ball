import React from 'react';
import EightBall from './EightBall';
import answers from './answers';
import './App.css';

function App() {
  return (
    <>
      <EightBall answers={answers} />
    </>
  );
}

export default App;
