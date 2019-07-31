import React from 'react';
import './App.css';
import Contact from "./components/Contact"
import NavTab from './components/NavTab';
import TeamCards from './components/TeamCards';
import 'semantic-ui-react'
import BusinessProfile from './components/BusinessProfile'
import CategoriesPage from './components/CategoriesPage';



function App() {
  return (
    <div className="App">
      <NavTab />
      <BusinessProfile />
      <CategoriesPage />
      <Contact />
      <TeamCards/>
    </div>
  );
}

export default App;