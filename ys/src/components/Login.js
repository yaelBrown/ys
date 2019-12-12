import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h5>Login</h5>
        <form action="/login" method="post" id="login-form">
          <input type="text" id="username" name="username"></input><br/>
          <input type="password" id="password" name="password"></input><br/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
