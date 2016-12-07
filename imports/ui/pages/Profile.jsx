import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Control } from '/imports/api/control/control.js';

class Profile extends Component {

renderProfileCard() {
    return this.props.users.map((user) => {
      if (user._id == Meteor.user()._id) //super hacky, needs refactor //TODO don't pull all users
        {
          return (
              <ProfileCard
                key = {user._id}
                imgSrc = {user.imgSrc}
                name = {user.name}
                intro = {Meteor.user().profile.intro} // needs refactor to use this.props
                clientEditProfile = {this.props.clientEditProfile}
                />
            );
        }
    });
  }

  render() {
    return (
      <div>
        <h1>My Profile</h1>
        {this.renderProfileCard()}
      </div>
    )
  }
}

//mapping json array to dom format, put Collection to this.props
export default createContainer(() => {
  Meteor.subscribe('discoverUsers');

  return {
    users: Meteor.users.find({}).fetch().map((user) => {
      return ({_id: user._id,
      name: user.profile.name,
      intro: user.intro,
      imgSrc: user.imageUrl(),
    });
    }),
    clientEditProfile: Control.clientEditProfile
  };
}, Profile);
