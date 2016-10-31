import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';


class Profile extends Component {
 renderProfileCard() {

    return this.props.users.map((user) => {
      console.log(user);
      return (
        <ProfileCard
        key = {user._id}
        imgSrc = {user.imgSrc}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.renderProfileCard()}
      </div>
    )
  }
}

//mapping json array to dom formate, put Collection to this.props
export default createContainer(() => {
  Meteor.subscribe('discoverUsers');

  return {
    users: Meteor.users.find({}).fetch().map((user) => {
      return ({_id: user._id,
      imgSrc: "https://graph.facebook.com/v2.7/" + user.services.facebook.id + "/picture?fields=picture&height=960&width=960&redirect=true",
    });
    }),
    currentUser: Meteor.user(),
  };
}, Profile);
