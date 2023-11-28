import React from 'react';
import './App.css';
import LoginForm from './components/page.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm /> {/* Use the component here */}
      </header>
    </div>
  );
}

export default App;
