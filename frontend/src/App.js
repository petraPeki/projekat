import React from 'react';
import Ranking from './Ranking';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="/images/6122397.png" alt="My Image" className="resized-image"/>
        <h1>Poređaj svoje omiljene vozače</h1>
        
      </header>
      <Ranking /> 
    </div>
  );
}

export default App;