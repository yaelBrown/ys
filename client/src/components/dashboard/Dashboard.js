import React, { Component } from 'react'
import DashboardNav from './dashboard-nav/Dashboard-nav'
import { Link } from "react-router-dom";

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardNav/>
        <h1>Dashboard</h1>
        <Link to='/Profile'>View your profile</Link>
      </div>
    )
  }
}
