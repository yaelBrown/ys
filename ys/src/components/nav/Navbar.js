import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import './navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/register">register</Link></li>
            </ul>
          </nav>
        </div>
      </Router>
    )
  }
}
