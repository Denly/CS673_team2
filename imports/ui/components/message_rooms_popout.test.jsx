import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import MessageRoomPopout from './message_rooms_popout.jsx';

describe('MessageRoomPopout', () => {
  it('should render data in MessageRoomPopout', () => {
    const msgRoom = {
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message..',
      name: 'name',
      date: '3/9 2017',
    };
	const msgRoom1 = {
      id: Math.random(),
      imgSrc: 'img_not_find.jpg',
      message: 'message1..',
      name: 'name1',
      date: '4/9 2017',
    };
	const msgRooms = [msgRoom, msgRoom1]
    	const MRC = shallow(<MessageRoomPopout messageRooms = {msgRooms} />);
  chai.assert(MRC.html().includes(msgRoom.id));
    	chai.assert(MRC.html().includes(msgRoom.message));
   	chai.assert(MRC.html().includes(msgRoom.name));
    	chai.assert(MRC.html().includes(msgRoom.date));
  chai.assert(MRC.html().includes(msgRoom1.id));
	chai.assert(MRC.html().includes(msgRoom1.message));
    	chai.assert(MRC.html().includes(msgRoom1.name));
   	chai.assert(MRC.html().includes(msgRoom1.date));
  });
});
