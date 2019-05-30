import React, { useEffect, useState } from 'react';
import './App.css';

function App () {
  const [pizzaStatus, changePizzaStatus] = useState('good')

  return (
    <div>
      <h1>Pizza is a food Group: A SPA and Comprehensive Analysis </h1>
      <p>I eat pizza for at least two meals a day and I'm fine.</p>
      <p>Current Pizza Status: {pizzaStatus}</p>
      <button onClick={changePizzaStatus('bad')}>Change Pizza Status</button>
    </div>
  );
}

export default App;
