import React, { useEffect, useState } from 'react';
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

