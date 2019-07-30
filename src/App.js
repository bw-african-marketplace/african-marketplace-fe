import React from 'react';
import './App.css';
import Comparison from './components/Comparison'
import NavTab from './components/NavTab';
import 'semantic-ui-react'


function App() {
  return (
    <div className="App">
      <NavTab />
      <Comparison />
    </div>
  );
}

export default App;