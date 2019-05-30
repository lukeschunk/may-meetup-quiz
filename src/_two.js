import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, changeColor] = useState('red')

  
  return (
    <div className="App">
      <div style={{ width: 200, height: 200, backgroundColor }} />
      <button onClick={() => changeColor('green')}>Change Color</button>
    </div>
  );
}

export default App;
