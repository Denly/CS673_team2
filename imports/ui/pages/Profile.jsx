import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Control } from '/imports/api/control/control.js';

class Profile extends Component {

renderProfileCard() {
    return this.props.users.map((user) => {
      return (
              <ProfileCard
                id ={user._id}
                key = {user._id}
                imgSrc = {user.imgSrc}
                name = {user.name}
                intro = {user.intro} // needs refactor to use this.props
                clientEditProfile = {this.props.clientEditProfile}
                />
            );
    });
  }

  render() {
    return (
      <div>
        {this.renderProfileCard()}
      </div>
    )
  }
}

//mapping json array to dom format, put Collection to this.props
export default createContainer((props) => {
  Meteor.subscribe('discoverUsers');
  var id = props.params.id;
  return {
    users: Meteor.users.find(id).fetch().map((user) => {
      return ({_id: user._id,
      name: user.profile.name,
      intro: user.profile.intro,
      imgSrc: user.imageUrl(),
    });
    }),
    clientEditProfile: Control.clientEditProfile,
    id:id
  };
}, Profile);
