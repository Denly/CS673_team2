import React, { Component, PropTypes } from 'react';

/*Message profile card or message user card or something - iank*/

export default class MessageRoomCard extends Component {
  render() {
    return (
          <a className="collection-item avatar waves-effect">
          <img src={this.props.imgSrc} alt="" className="circle"/>
          <span className="title">{this.props.name}</span>
          <p>{this.props.message}<br/>{this.props.date}
          </p>
          <span href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
          </span>
          </a>
    )
  }
}

MessageRoomCard.propTypes = {
  imgSrc: PropTypes.string,
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
