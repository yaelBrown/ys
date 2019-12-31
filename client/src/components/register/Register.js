import React, { Component } from 'react';
import ReactFilestack from 'filestack-react';
import Navbar from '../nav/Navbar';

import './register.css';

export default class Register extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="register-form">
          <form action="http://localhost:8080/api/users/register" method="post">
            <h1>Register a new user</h1>
            <input type="text" id="fName" name="fName" placeholder="First Name"/>
            <input type="text" id="lName" name="lName" placeholder="Last Name"/>
            <br/>
            <input type="email" id="email" name="email" placeholder="email@address.com" required/>
            <br/>
            <input type="password" id="password" name="password" placeholder="password" required/>
            <input type="text" id="location" name="location" placeholder="city, state"/>
            <h4>Birthday</h4>
            <input type="date" id="birth_day" name="birth_day"/>
            <br/>
            <h4>Upload picture</h4>
            <ReactFilestack
              apikey={"A5FzQeyKZRbyNUEoo7QMnz"}
              onSuccess={(res) => res}
            />
            <br/>
            <small>(You can upload a picture later)</small>
            <br/>
            <button type="submit" id="submit">Register</button>
            <button type="reset" id="reset">Reset</button>
          </form>
        </div>
      </div>
    )
  }
}