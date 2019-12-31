import React, { Component } from 'react';
import Navbar from '../../nav/Navbar';
import { Redirect } from 'react-router-dom';

import './dashboard-logout.css';

export default class dashboardLogout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      redirect: false
    }

    this.decrementTime = this.decrementTime.bind(this);
  }

  decrementTime() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    this.countDown = setInterval(this.decrementTime, 1000);
    this.setState({countDown: this.countDown});
  }

  componentDidUpdate() {
    if (this.state.count == 0) {
      clearInterval(this.state.countDown);
      this.setState({ redirect: true });
      localStorage.clear("ys-jwt");
    }
  }

  render() {
    let { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/'/>
    } else {
      return (
        <div>
          <Navbar/>
          <div className="logout">
            <h1>Goodbye :)</h1>
            <p>You will be redirected in {this.state.count}. Or click <a href="/">Here</a>.</p>
          </div>
        </div>
      )
    }
  }
}
