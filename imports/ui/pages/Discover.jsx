import React, { Component, PropTypes } from 'react';
import ProfileCard from '../components/profile_card.jsx';
//import { createContainer } from 'meteor/react-meteor-data';

export default class Discover extends Component {
  renderProfileCardList() {

    //return this.props.users.map((user) => {
      //console.log(user);
      return (
        <ProfileCard/>
      );
    //});
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

//need to rewrite this to NOT user current user and instead use
//test users from database

/*//mapping json array to dom formate, put Collection to this.props
export default createContainer(() => {
  Meteor.subscribe('discoverUsers');

  return {
    users: Meteor.users.find({}).fetch().map((user) => {
      return ({_id: user._id,
      imgSrc: "https://graph.facebook.com/v2.7/" + user.services.facebook.id + "/picture?fields=picture&height=300&width=300&redirect=true",
    });
    }),
    currentUser: Meteor.user(),
  };
}, Discover);
*/