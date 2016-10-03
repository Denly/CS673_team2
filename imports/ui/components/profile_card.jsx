import React, { Component } from 'react';

export default class ProfileCard extends Component {
  imgLink(){

    var domain = "https://graph.facebook.com/v2.7/";
    var query = "/picture?fields=picture&height=300&width=300&redirect=true";
    var imgLink = domain + this.props.facebookID + query;
    console.log(imgLink);
    return imgLink;
  }
   render() {
      return (
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img src={this.imgLink()} />

          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
            <p><a href="#">This is a link</a></p>
          </div>
        </div>
      )
   }
}
