import React, { Component, PropTypes } from 'react';
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';

export default class Discover extends Component {
  renderProfileCardList() {

    return this.props.users.map((user) => {
      return (
        <ProfileCard
        key = {user._id}
        facebookID = {user.services.facebook.id}
        size = {""}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Discover Page</h1>
        {this.renderProfileCardList()}
      </div>
    )
  }
}

//mapping json array to dom formate, put Collection to this.props
export default createContainer(() => {
  Meteor.subscribe('discoverUsers');

  return {
    users: Meteor.users.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, Discover);
