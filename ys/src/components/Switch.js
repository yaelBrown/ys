import React, { Component } from 'react'
import { BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Register from './register/Register';
import Index from './index/Index';
import Login from './login/Login';

export default class Switch extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    )
  }
}
