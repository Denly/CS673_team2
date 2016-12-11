import React, { Component, PropTypes } from 'react';
import DiscoverCard from '../components/discover_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';

export default class Discover extends Component {
  renderDiscoverCardList() {
    return this.props.users.map((user) => {
      if (user._id != Meteor.user()._id)  //super hacky, needs refactor
      {return (
        <DiscoverCard
          key = {user._id}
          userId = {user._id}
          imgSrc = {user.imgSrc}
          name = {user.name}
          />

      );}
    });
  }

  render() {
    return (
      <div>
        <h1 className="flow-text">Discover</h1>
        <div className="row">
          {this.props.loading ? (
            <div>Loading</div>
           ) : this.renderDiscoverCardList()
          }
        </div>
      </div>
    )
  }
}

//need to rewrite this to NOT user current user and instead use
//test users from database

//mapping json array to dom format, put Collection to this.props
export default createContainer(() => {
  const subscription = Meteor.subscribe('discoverUsers');

  return {
    loading : !subscription.ready(),
    users: Meteor.users.find({}).fetch().map((user) => {
      return ({
        _id: user._id,
        name: user.profile.name,
        imgSrc: "https://graph.facebook.com/v2.7/" + user.services.facebook.id + "/picture?fields=picture&height=960&width=960&redirect=true",
      });
    })
  };
}, Discover);
