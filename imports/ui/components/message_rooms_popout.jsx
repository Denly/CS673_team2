import React, { Component, PropTypes } from 'react';
import MessageRoomCard from '../components/message_room_card.jsx';
import { createContainer } from 'meteor/react-meteor-data';

export default class MessageRoomsPopout extends Component {
  componentDidMount() {
    //message_rooms_popout
    $('#slide-out').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'right',  // Choose the horizontal origin
    }
    );
  }
  
  render() {
    return (
      <ul id="slide-out" data-activates="slide-out" className="side-nav collection">
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

  return {
    messageRooms: [{
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    },
    {
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    },
    {
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    }
  ]
  };
}, MessageRoomsPopout);
