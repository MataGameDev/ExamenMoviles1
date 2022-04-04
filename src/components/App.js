import React from 'react';
import Cafe from '../components/images/Cafe.png';

import './App.css';
import Game from './Game/Game';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Cafe} className="App-logo" alt="logo" />
      </header>
      <div>
        <Game/>
      </div>
    </div>
  );
}
export default App;
