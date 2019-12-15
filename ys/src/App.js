import React from 'react';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Index from './components/index/Index';
import Register from './components/register/Register';
import Switch from './components/Switch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch/>
      </div>
    </BrowserRouter>
  );
}

export default App;