import React, { Component, PropTypes } from 'react';
//import ProfileIntro from '../components/profile_intro.jsx'; 


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
          <img src= {this.props.imgSrc ? this.props.imgSrc : "img_not_find.jpg"} />
        </div>
        <div className="card-content profile-name">
          <span className="card-title grey-text text-darken-4">{this.props.name}</span>
        </div>
        <div className="card-content profile-intro">
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            onKeyPress={this.handleSubmit}
            className="materialize-textarea">
          </textarea>
        </div>
      </div>
    )
  }
}

ProfileCard.propTypes = {
  imgSrc: PropTypes.string,
};
