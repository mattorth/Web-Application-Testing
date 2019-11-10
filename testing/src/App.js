import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Display from "./Components/Display";
import Dashboard from "./Components/Dashboard";

function App() {

  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  
  const addStrike = () => {
    setStrikes(strikes + 1);
    console.log("added strike");
    if(strikes === 2) {
      setStrikes(0);
      setBalls(0);
    }

  }
  
  const addBall = () => {
    setBalls(balls + 1);
    console.log("added ball");
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    }
  }

  const addFoul = () => {
    if(strikes < 2) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(strikes);
    }
  }

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  }

    return (
      <div className="App">
        <Display strikes={strikes} balls={balls} />
        <Dashboard addStrike={addStrike} addBall={addBall} addFoul={addFoul} hit={hit} />
      </div>
    );
  
}

export default App;
