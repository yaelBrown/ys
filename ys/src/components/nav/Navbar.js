import React, { Component } from 'react'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from '../register/Register';
import Index from '../index/Index';
import Login from '../login/Login';

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

          <Switch>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/">
              <Index/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}
