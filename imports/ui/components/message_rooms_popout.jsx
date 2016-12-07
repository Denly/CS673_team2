import React, { Component, PropTypes } from 'react';
import MessageRoomCard from '../components/message_room_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Messages } from '/imports/api/message/messages.js';
import { Control } from '/imports/api/control/control.js';

/**
* Class object for pop-out messages list.
*
*/
class MessageRoomsPopout extends Component {

  render() {
    return (
      <ul id="slide-out" className="side-nav collection">
        {this.props.messageRooms.length === 0 ?
          <span>No Message Room to show</span>
          :
          this.props.messageRooms.map((o) => (
            <MessageRoomCard
              key = {o.id}
              toUserId = {o.toUserId}
              imgSrc = {o.imgSrc}
              message = {o.message}
              name = {o.name}
              date = {o.date}/>
          ))
        }
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

  return {messageRooms: MessageRooms.find({
    "$or": [{
      userId1:Meteor.userId()
    }, {
      userId2:Meteor.userId()
    }]
  }).fetch().map((mr)=>{
    var msg = Control.clientGetLatestMsg(mr.toUserId());
    toUser = Meteor.users.findOne(mr.toUserId())
    name = toUser ? toUser.name : 'name';
    if(!msg){
      console.error("LatestMsg is losted in room " + mr.toUserId());
      msg.text = "LatestMsg is losted";
    }
    return {
      id: mr._id,
      imgSrc: '/img_not_find.jpg', // '/' is start with root url, without it, is become http://localhost:3000/Message/<sth>/xx.jpg which is not we want
      message: msg.text,
      toUserId: mr.toUserId(),
      name: name,
      date: msg ? msg.createdAt.toDateString() : '',
    };
  })}

}, MessageRoomsPopout);
