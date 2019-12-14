import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <form action="/login" method="post">
          <h1>Login</h1>
          <input type="text" id="username" name="username" placeholder="login" required></input><br/>
          <input type="password" id="password" name="password" placeholder="password" required></input><br/>
          <button type="submit">Login</button>
          <br/>
          <p>Not a user? <a href="/register">Click here</a> to register.</p>
        </form>
      </div>
    )
  }
}
