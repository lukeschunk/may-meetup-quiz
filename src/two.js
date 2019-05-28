import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Kent = () => 'Kent'

const C = () => 'C'

const Dodds = () => 'Dodds'

const space = () => ' '

function App() {
  return (
    <div className="App">
      <Kent />
      <space />
      <C />
      <space />
      <Dodds />
    </div>
  );
}

export default App;


// Warning: The tag <space> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
