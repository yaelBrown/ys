import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Register from '../components/register/Register';
import Index from '../components/index/Index';
import Login from '../components/login/Login';

export default class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact strict path="/" exact component={Index} />
        <Route exact strict path="/login" component={Login} />
        <Route exact strict path="/register" component={Register} />
      </Switch>
    )
  }
}
