import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }




  login(e) {
    e.preventDefault();
    console.log("login button was clicked");
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-wrapper">
          <h1>Login</h1>
          <input type="email" id="username" name="username" placeholder="email@address.com" required></input><br/>
          <input type="password" id="password" name="password" placeholder="password" required></input><br/>
          <button type="button" id="login" onClick={this.login}>Login</button>
          <br/>
          <p>Not a user? <a href="/register">Click here</a> to register.</p>
        </div>
      </div>
    )
  }
}