import React, { Component } from 'react';

export default class ProfileCard extends Component {
   render() {
      return (
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img src="/lena.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
        </div>
      )
   }
}
