import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class Landing extends Component {
  logout(){
    AccountsTemplates.logout();
    console.log("log out");
  }

  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <Blaze template="atForm" />
        <a className="waves-effect waves-light btn" onClick={this.logout}><i className="material-icons left">power_settings_new</i>Logout</a>

      </div>
    )
  }
}
