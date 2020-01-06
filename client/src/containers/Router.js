import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Index from '../components/index/Index';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Profile from '../components/profile/Profile';
import Dashboard from '../components/dashboard/Dashboard';
import AuthenticateComponent from '../util/AuthenticateComponent';
import dashboardLogout from '../components/dashboard/dashboard-logout/dashboard-logout';
import dashboardFollowers from '../components/dashboard/dashboard-followers/dashboard-followers';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" exact component={Index} />
        <Route exact strict path="/login" component={Login} />
        <Route exact strict path="/register" component={Register} />
        <Route exact strict path="/profile" component={Profile} />
        <AuthenticateComponent>
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/logout" component={dashboardLogout} />
          <Route exact strict path="/followers" component={dashboardFollowers} />
        </AuthenticateComponent>
      </Switch>
    )
  }
}