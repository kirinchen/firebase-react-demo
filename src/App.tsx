import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_NOT_SECRET_CODE1} G {process.env.REACT_APP_NOT_SECRET_CODE} R {process.env.REACT_APP_NOT_SECRET_CODE2}
        </a>
      </header>
    </div>
  );
}

export default App;
