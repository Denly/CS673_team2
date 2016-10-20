import React, { Component, PropTypes } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class Parallax extends Component {

  componentDidMount(){
    $(document).ready(function(){
      $('.parallax').parallax();
    });
  }

  logout(){
    AccountsTemplates.logout();
    console.log("log out");
  }

  render() {
    return (
      <div className="parallax-container center-align">
        <div className="parallax"><img src="/bg.jpg"/></div>
        <Blaze template="atForm" />
        <a className="waves-effect waves-light btn" onClick={this.logout}><i className="material-icons left">power_settings_new</i>Logout</a>
      </div>
    )
  }
}
