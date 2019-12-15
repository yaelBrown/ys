import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/nav/Navbar';

import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;