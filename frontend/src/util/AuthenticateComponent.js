import React, { Component } from 'react';
import { getJwt } from './helpers/jwt';

export default class AuthenticateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt();
    console.log(jwt);
    if (!jwt) this.props.history.push('/login');
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
