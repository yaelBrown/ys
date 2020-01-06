import React, { Component } from 'react'
import DashboardNav from '../dashboard/dashboard-nav/Dashboard-nav';
import Navbar from '../nav/Navbar';
import ProfileContent from './Profile-content'

export default class Profile extends Component {

  render() {
    let isLoggedIn = localStorage.getItem("ys-jwt") != null;

    console.log(isLoggedIn);

    if (isLoggedIn) {
      return (
        <div>
          <DashboardNav/>
          <ProfileContent/>
        </div>
      )
    } else {
      return (
        <div>
          <Navbar/>
          <ProfileContent/>
        </div>
      )
    }
  }
}
