import React, { Component, PropTypes } from 'react';

export default class ProfileCard extends Component {
  render() {
    return (
      <div className="card profile-photo">
        <div className="card-image waves-effect waves-block waves-light">
          <img src= {this.props.imgSrc ? this.props.imgSrc : "img_not_find.jpg"} />
        </div>
        <div className="card-content profile-name">
          <span className="card-title grey-text text-darken-4">{this.props.name}</span>
        </div>
        <div className="card-content profile-intro">
          Hello! I've never made an online dating profile before so I don't know what to write!
        </div>
      </div>
    )
  }
}

ProfileCard.propTypes = {
  imgSrc: PropTypes.string,
};
