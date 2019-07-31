import React from 'react';
import './App.css';
import Comparison from './components/Comparison'
import Contact from "./components/Contact"
import NavTab from './components/NavTab';
import TeamCards from './components/TeamCards';
import 'semantic-ui-react'
import CategoriesPage from './components/CategoriesPage';



function App() {
  return (
    <div className="App">
      <NavTab />

      <CategoriesPage />
      {/* <Comparison /> */}
      <Contact />
      <TeamCards/>
    </div>
  );
}

export default App;