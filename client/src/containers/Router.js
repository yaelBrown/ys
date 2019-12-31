import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Register from '../components/register/Register';
import Index from '../components/index/Index';
import Login from '../components/login/Login';
import Dashboard from '../components/dashboard/Dashboard'
import AuthenticateComponent from '../util/AuthenticateComponent';
import dashboardLogout from '../components/dashboard/dashboard-logout/dashboard-logout';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" exact component={Index} />
        <Route exact strict path="/login" component={Login} />
        <Route exact strict path="/register" component={Register} />
        <AuthenticateComponent>
          <Route exact strict path="/dashboard" component={Dashboard} />
          <Route exact strict path="/logout" component={dashboardLogout} />
        </AuthenticateComponent>
      </Switch>
    )
  }
}