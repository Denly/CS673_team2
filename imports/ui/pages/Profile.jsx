import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';


export default class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ProfileCard
          key = {this.props._id}
          imgSrc = {this.props.imgSrc}
          />
      </div>
    )
  }
}

setTimeout(function(){
  export default createContainer(() => {
    return {
      _id: Meteor.user()._id,
      imgSrc: "https://graph.facebook.com/v2.7/" + Meteor.user().services.facebook.id + "/picture?fields=picture&height=960&width=960&redirect=true",
    };
  }, Profile);
}, 5);
