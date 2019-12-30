import React, { Component } from 'react';
import Axios from 'axios';

import './login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  validateEmailHelper(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  handleLogin(e) {
    e.preventDefault();
    console.log("login button was clicked");
    console.log(this.state.email);
    console.log(this.state.password);

    if (this.validateEmailHelper(this.state.email)) {
      Axios.post("http://localhost:8080/api/users/login",
        {
          email: this.state.email,
          password: this.state.password
        },
        { withCredentials: false })
      .then(res => {
        localStorage.setItem('ys-jwt', res.data);
        this.props.history.push('/dashboard');
      })
      .catch(err => console.log("login error", err));
    } else {
      return;
    }

  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-wrapper">
          <h1>Login</h1>

          <input
          type="email"
          name="email"
          placeholder="email@address.com"
          value={this.state.email}
          onChange={this.handleChange}
          required></input><br/>

          <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}
          required></input><br/>

          <button type="button" id="login" onClick={this.handleLogin}>Login</button>
          <br/>
          <p>Not a user? <a href="/register">Click here</a> to register.</p>
        </div>
      </div>
    )
  }
}