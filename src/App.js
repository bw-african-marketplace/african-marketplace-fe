import React from 'react';
import './App.css';
import NavTab from './components/NavTab';
import 'semantic-ui-react'
import CategoriesPage from './components/CategoriesPage';


function App() {
  return (
    <div className="App">
      <NavTab />
      <CategoriesPage />
    </div>
  );
}

export default App;