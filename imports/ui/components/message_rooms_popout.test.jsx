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
	console.log("hello");
    const MRC = shallow(<MessageRoomPopout messageRooms = {msgRooms} />);
	console.log(MRC.html());
    chai.assert(MRC.html().includes(msgRoom.message));
	console.log(MRC.html()+"1");
    chai.assert(MRC.html().includes(msgRoom.name));
	console.log(MRC.html()+"2");
    chai.assert(MRC.html().includes(msgRoom.date));
	console.log(MRC.html()+"3");
	chai.assert(MRC.html().includes(msgRoom1.message));
	console.log(MRC.html()+"1");
    chai.assert(MRC.html().includes(msgRoom1.name));
	console.log(MRC.html()+"2");
    chai.assert(MRC.html().includes(msgRoom1.date));
	console.log(MRC.html()+"3");
	//chai.assert(MRC.text().includes(msgRoom.imgSrc))
	
  });
});