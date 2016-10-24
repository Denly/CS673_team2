import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';
import Parallax from '../components/parallax.jsx';

export default class Landing extends Component {

  render() {
    return (
      <div>
        <Parallax/>
        <div className="container">
          <div className="section white">
          </div>
        </div>
      </div>
    )
  }
}
