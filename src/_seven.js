import React, { useEffect, useState } from 'react';
import './App.css';


class App extends React.Component {
  state = {
    counter: 1,
  };

  incrementByOne = () => {
    //should add 1 to the counter
    this.setState({ counter: this.state.counter + 1 })

  }

  incrementByThree = () => {
    //should add 3 to the counter
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
    this.setState({ counter: this.state.counter + 1 });
  };
  
  render() {
    return (
      <div>
          <p>{this.state.counter}</p>
          <button onClick={this.incrementByOne}>ADD 1</button>
          <button onClick={this.incrementByThree}>ADD 3</button>
      </div>
    );
  }
}

export default App;

