import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const logMousePosition = e => {
  console.log({
    x: e.clientX,
    y: e.clientY,
  });
};

function App() {
  const [shouldLogMousePosition, toggleShouldLogMousePosition] = useState(true) 

  if (shouldLogMousePosition) {
    useEffect(() => {
      window.addEventListener("mousemove", logMousePosition);

      return () => {
        window.removeEventListener("mousemove", logMousePosition);
      };
    });
  }

  return (
    <div className="App">
      <button onClick={() => toggleShouldLogMousePosition(!shouldLogMousePosition)}>TOGGLE YEAH!!!</button>
    </div>
  );
}

export default App;

// React Hook "useEffect" is called conditionally. React Hooks must be called in the exact same order in every component render  react-hooks/rules-of-hooks
