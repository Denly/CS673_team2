import React, { Component } from 'react';
import ProfileCard from '../components/profile_card.jsx';

export default class Discover extends Component {
  render() {
    return (
      <div>
        <h1>Discover Page</h1>
        <ProfileCard />
        <ProfileCard />
      </div>
    )
  }
}
