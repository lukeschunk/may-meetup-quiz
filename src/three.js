import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const CATS = [
  {
    name: 'extra fluffy'
  },
  {
    name: 'extremely fluffy'
  },
  {
    name: 'causes-a-partial-eclipse fluffy'
  },
  {
    name: 'sorry we dont sell non fluffy cats here'
  }
]

function App() {
  const [cats, updateCats] = useState(CATS)

  return (
    <div className="App">
      {cats.map((c, i) => (
        <div key={i}>
            {c}
        </div>
      ))}
      <button onClick={() => updateCats} >Update Cats</button>
    </div>
  );
}

export default App;
