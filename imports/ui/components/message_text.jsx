import React, { Component, PropTypes } from 'react';
import {emojify} from 'react-emojione';

export default class MessageText extends Component {
  render() {
    return (
      <li className={'collection-item avatar ' + (this.props.isOwner ? 'right-align' : '')}>
         {this.props.isOwner ? '' : <img src={this.props.imgSrc} alt="" className="circle"/> }

        <span className="title">{this.props.date}</span>
        <p>{emojify(this.props.text, {output: 'unicode'})}</p>
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
