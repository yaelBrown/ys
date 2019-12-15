import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  render() {
    return (
      <div className="login-form">
        <form action="http://localhost:8080/api/users/login" method="post">
          <h1>Login</h1>
          <input type="email" id="username" name="username" placeholder="email@address.com" required></input><br/>
          <input type="password" id="password" name="password" placeholder="password" required></input><br/>
          <button type="submit">Login</button>
          <br/>
          <p>Not a user? <a href="/register">Click here</a> to register.</p>
        </form>
      </div>
    )
  }
}