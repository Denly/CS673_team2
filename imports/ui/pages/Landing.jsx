import {emojify} from 'react-emojione';
import React, { Component } from 'react';
import Blaze from 'meteor/gadicc:blaze-react-component';


const checkString = emojify('MeetCute - A Modern Dating App :wink: :) :beers:', {output: 'unicode'});
const options = {
    convertShortnames: true,
    convertUnicode: true,
    convertAscii: true,
    styles: {
        backgroundImage: 'url(emojione.sprites.png)',
        width: '32px',
        height: '32px',
        margin: '4px'
    },
    // this click handler will be set on every emoji
    handleClick: event => alert(event.target.title)
};

export default class Landing extends Component {
  logout(){
    AccountsTemplates.logout();
    console.log("log out");
  }
  

  render() {
    return (
      <div>
        <h1>{checkString}</h1>
        <Blaze template="atForm" />
        {Meteor.user() ? '' :
        <a className="waves-effect waves-light btn" onClick={this.logout}><i className="material-icons left">power_settings_new</i>Logout</a>
        }
      </div>
    )
  }
}
