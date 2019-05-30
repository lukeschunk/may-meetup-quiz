import React from 'react';
import './App.css';

const MeetupProblems = ({ food, projector, boring }) => (
  <div>
    <h1>Meetup Problems:</h1>
    <p>{food && 'there are food problems'}</p>
    <p>{projector && 'there are projector problems'}</p>
    <p>{boring && 'this meetup is boring'}</p>
    <button 
      onClick={() => {
        food = false;
        projector = false;
        boring = false;
      }}
    >
      Get Rid of Meetup Problems
    </button>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div>
        <MeetupProblems
          food={true}
          projector={true}
          boring={true}
        />
      </div>
    );
  }
}

export default App;
