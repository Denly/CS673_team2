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
        {this.props.loading ? (
          <div> Loading </div>
        ) : this.props.messageRooms.length === 0 ?
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
  // Subscriptions are reactive - so the container re-runs when something changes in database
  const messageRoomsSub = Meteor.subscribe('messageRoomsFromLoggedInUser')
  return {
    // If the subscription is not ready yet, return nothing since user not available yet on client. We are ;padoing
     loading: !messageRoomsSub.ready(),
    messageRooms: !messageRoomsSub.ready() ? [] : MessageRooms.find({
    "$or": [{
      userId1:Meteor.userId()
    }, {
      userId2:Meteor.userId()
    }]
  }).fetch().map((mr)=>{
    // This code doesn't wait for the subscription to be ready
    // but it still works because when the subscription is ready the component re-renders and shows the data
    // because added the waiting in the control to insert the message
    var msg = Control.clientGetLatestMsg(mr.toUserId());
    toUser = Meteor.users.findOne(mr.toUserId());
    name = toUser ? toUser.name : 'Unknown name';
    return {
      id: mr._id,
      imgSrc: toUser && toUser.imageUrl(), // '/img_not_find.jpg', // '/' is start with root url, without it, is become http://localhost:3000/Message/<sth>/xx.jpg which is not we want
      message: msg && msg.text,
      toUserId: mr.toUserId(),
      name: toUser && toUser.profile.name || 'Unknown Name',
      date: msg ? msg.createdAt.toDateString() : '',
    };
  })}

}, MessageRoomsPopout);
