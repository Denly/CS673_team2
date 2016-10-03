import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import ProfileCard from '../components/profile_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';

export default class Discover extends Component {
  render() {
    return (
      <div>
        <h1>Discover Page</h1>
        <ProfileCard
          key = {"1234"}
          facebookID = {"699173800246359"}
          size = {""}
          />
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
