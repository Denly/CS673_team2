import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Task from '../components/Task.jsx';

// App component - represents the whole app
export default class App extends Component {
  componentDidMount() {
    $(".button-collapse").sideNav();
  }

  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><Link to="Landing#">Landing</Link></li>
              <li><Link to="Discover">Gallery</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="Landing#">Landing</Link></li>
              <li><Link to="Discover">Gallery</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
            </ul>
          </div>
        </nav>


        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
