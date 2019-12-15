import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
// import Login from './components/login/Login';
// import Index from './components/index/Index';
// import Register from './components/register/Register';
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