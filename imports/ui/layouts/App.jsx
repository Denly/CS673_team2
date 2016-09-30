import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

import Task from '../components/Task.jsx';

// App component - represents the whole app
export default class App extends Component {


  render() {
    return (
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to="Landing">Landing</Link></li>
              <li><Link to="Gallery">Gallery</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
            </ul>
          </div>
        </nav>
        <header>
          <h1>Header</h1>
            <ul className="header">
              <li><Link to="Landing">Landing</Link></li>
              <li><Link to="Gallery">Gallery</Link></li>
              <li><Link to="Message">Message</Link></li>
              <li><Link to="Profile">My Profile</Link></li>
            </ul>
        </header>


        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
