import React, { Component, PropTypes } from 'react';

export default class MessageText extends Component {
  render() {
    return (
      <li className={'collection-item avatar ' + (this.props.isOwner ? 'right-align' : '')}>
         {this.props.isOwner ? '' : <img src={this.props.imgSrc} alt="" className="circle"/> }

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
  fromUserId: PropTypes.string.isRequired,
  toUserId: PropTypes.string.isRequired,
  isOwner: PropTypes.bool,
};
