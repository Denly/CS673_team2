import React, { Component, PropTypes } from 'react';

export default class MessageText extends Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img src={'img_not_find.jpg'}alt="" className="circle"/>
        <span className="title">{this.props.date}</span>
        <p>{this.props.text}</p>
      </li>

    )
  }
}

MessageText.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
};
