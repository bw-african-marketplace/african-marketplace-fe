import React from 'react';
import './App.css';
import Comparison from './components/Comparison'
import NavTab from './components/NavTab';
import 'semantic-ui-react'
import BusinessProfile from './components/BusinessProfile'


function App() {
  return (
    <div className="App">
      <NavTab />
      <BusinessProfile />
     
    </div>
  );
}

export default App;
