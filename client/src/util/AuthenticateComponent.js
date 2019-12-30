import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class AuthenticateComponent extends Component {
  constructor(props) {
    super(props);

    let jwt = localStorage.getItem("ys-jwt");

    if (!jwt) {
      this.state = { user: null };
      return;
    } else {
      this.state = { user: jwt_decode(jwt) };
    }
  }

  render() {
    if (this.state.user === null) {
      return (
        <div>
          <Redirect to="/login"/>
        </div>
      )
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(AuthenticateComponent);