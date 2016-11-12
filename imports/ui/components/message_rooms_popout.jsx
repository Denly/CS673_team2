import React, { Component, PropTypes } from 'react';
import MessageRoomCard from '../components/message_room_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Messages } from '/imports/api/message/messages.js';

class MessageRoomsPopout extends Component {

  render() {
    return (
      <ul id="slide-out" className="side-nav collection">
        <li><Link to="/Landing">Landing</Link></li>
        {this.props.messageRooms.map((o) => (
           <MessageRoomCard
            key = {o.id}
            imgSrc = {o.imgSrc}
            message = {o.message}
            name = {o.name}
            date = {o.date}/>
        ))}
      </ul>
    )
  }
}

MessageRoomsPopout.propTypes = {
   arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape(
     MessageRoomCard.propTypes
   )),
}

export default createContainer(() => {
//subscribe messageRooms here

  return {messageRooms: MessageRooms.find().fetch().map((mr)=>{
    return {
      id: mr._id,
      imgSrc: '/img_not_find.jpg', // '/' is start with root url, without it, is become http://localhost:3000/Message/<sth>/xx.jpg which is not we want
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    };
  })}

}, MessageRoomsPopout);
