import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import MessageRoomCard from './message_room_card.jsx';

describe('MessageRoomCard', () => {
  it('should render data in MessageRoomCard', () => {
    const msgRoom = {
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    };

    const MRC = shallow(<MessageRoomCard {...msgRoom}/>);
    chai.assert(MRC.text().includes(msgRoom.message));
    chai.assert(MRC.text().includes(msgRoom.name));
    chai.assert(MRC.text().includes(msgRoom.date));
    chai.assert(MRC.html().includes(msgRoom.imgSrc));
  });
});
