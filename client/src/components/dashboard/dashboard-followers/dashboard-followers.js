import React, { Component } from 'react';
import DashboardNav from '../dashboard-nav/Dashboard-nav';

import './dashboard-followers.css';

export default class dashboardFollowers extends Component {



  render() {
    return (
      <div>
        <DashboardNav/>
        <div className="followersWrapper">
          <h1>Followers</h1>
        </div>
      </div>
    )
  }
}
