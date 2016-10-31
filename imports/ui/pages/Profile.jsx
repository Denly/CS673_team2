import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';


class Profile extends Component {

  render() {
    return (
      <div>
        <h1>Profile</h1>
        <ProfileCard
          key = {this.props._id}
          imgSrc = {this.props.imgSrc} />
      </div>
    )
  }
}

export default createContainer(() => {
  return {
   user: Meteor.users.find({}).fetch().map((user) => {
    return ({_id: user._id,
    imgSrc: "https://graph.facebook.com/v2.7/" + user.services.facebook.id + "/picture?fields=picture&height=960&width=960&redirect=true",
  });
  }),
  currentUser: Meteor.user(),
};
}, Profile);
