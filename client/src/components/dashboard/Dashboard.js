import React, { Component } from 'react'
import DashboardNav from './dashboard-nav/Dashboard-nav'

export default class dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardNav/>
        <h1>Dashboard</h1>
      </div>
    )
  }
}
