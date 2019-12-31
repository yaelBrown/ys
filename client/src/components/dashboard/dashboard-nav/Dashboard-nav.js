import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './dashboard-nav.css';

export default class DashboardNav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Dashboard</Link></li>
            <li><Link to="/Messages">Messages</Link></li>
            <li><Link to="/Followers">Followers</Link></li>
            <li><Link to="/Photos">Photos</Link></li>
            <li><Link to="/Logout">Logout</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
