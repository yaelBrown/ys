import React from 'react';
import './css/App.css';
import Navbar from './components/nav/Navbar';
import Login from './components/login/Login';
import Index from './components/index/Index';
import Register from './components/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;