import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {emojify} from 'react-emojione';

export default class MessageRoomCard extends Component {
  render() {
    return (

          <Link to={'/Message/'+this.props.toUserId} className="collection-item avatar waves-effect">
          <img src={this.props.imgSrc} alt="" className="circle"/>
          <span className="title">{this.props.name}</span>
          <p>{emojify(this.props.message, {output: 'unicode'})}<br/>{this.props.date}
          </p>
          <span className="secondary-content">
              <i className="material-icons">grade</i>
          </span>
          </Link>

    )
  }
}

MessageRoomCard.propTypes = {
  imgSrc: PropTypes.string,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
