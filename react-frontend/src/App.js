import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState(null);

  let fetching = false;

  useEffect(() => {
    if (greeting === null && !fetching) {
      fetching = true;
      fetch('http://localhost:8080/api/v1/greet')
        .then(res => res.json())
        .then(res => res.message)
        .then(message => {
          setGreeting(message);
          fetching = false;
        });
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        { greeting && 
          <p>
            {greeting}
          </p>
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
