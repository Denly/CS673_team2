import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <ProfileCard />
      </div>
    )
  }
}
