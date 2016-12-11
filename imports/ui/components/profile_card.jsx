import React, { Component, PropTypes } from 'react';

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {value : this.props.intro};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    var value = this.state.value.trim()
    if (event.key === 'Enter' || event.key === undefined) {
      this.setState({value: value});
      this.props.clientEditProfile(value);
    }
  }

  render() {
    return (
      <div className="card profile-photo">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="responsive-img" src= {this.props.imgSrc ? this.props.imgSrc : "img_not_find.jpg"} />
        </div>

        <div className="card-content profile-name">
          <label>Name</label>
          <div>
            <span className="card-title grey-text text-darken-4">{this.props.name}</span>
          </div>
        </div>
        { this.props.id == Meteor.userId() ?
        <div className="card-content profile-intro">
          <label>Self Introduction (click below to edit)</label>

          <textarea
            placeholder="Enter a brief summary of yourself here, press enter to publish"
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            className="materialize-textarea">
          </textarea>
        </div>
        :
        <p>not owner{this.props.intro}</p>
      }
      </div>
    )
  }
}

ProfileCard.propTypes = {
  imgSrc: PropTypes.string,
};
