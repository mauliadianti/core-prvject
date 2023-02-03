import React from 'react';
import './App.css';
import { Dashboard } from './pages/dashboard';

// ToDo: change to react hook
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          My learning react playground
        </p>
        <a
          className="App-link"
          href="https://github.com/mauliadianti"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch with me!
        </a> */}
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
