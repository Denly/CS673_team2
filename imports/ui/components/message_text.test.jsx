import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import MessageText from './message_text.jsx';

describe('MessageText', () => {
	
  it('should render data in MessageText', () => {
    const textMsg = {
      imgSrc: 'img_not_find.jpg',
      text: 'Text Message One',
      fromUserId: '100014121070626',
	  toUserId:'119550128527687',
      date: '3/9 2017',
	  isOwner: true,
	  
    };
	const textMsg1 = {
      imgSrc: 'img_not_find.jpg',
      text: 'Text Message Two',
      fromUserId: '100014121070626',
	  toUserId:'100014072081660',
      date: '4/9 2017',
	  isOwner: true,
    };
	const  textMsgs= [textMsg, textMsg1]

  const MRC = shallow(<MessageText messageRooms = {textMsgs} />);
  chai.assert(MRC.text().includes(textMsg.imgSrc));
  chai.assert(MRC.text().includes(textMsg.text));
  chai.assert(MRC.text().includes(textMsg.date));
  chai.assert(MRC.text().includes(textMsg.fromUserId));
  chai.assert(MRC.text().includes(textMsg.toUserId));
  chai.assert(MRC.text().includes(textMsg.isOwner));

  chai.assert(MRC.text().includes(textMsg1.imgSrc));
  chai.assert(MRC.text().includes(textMsg1.text));
  chai.assert(MRC.text().includes(textMsg1.date));
  chai.assert(MRC.text().includes(textMsg1.fromUserId));
  chai.assert(MRC.text().includes(textMsg1.toUserId));
  chai.assert(MRC.text().includes(textMsg1.isOwner));
  
  });
});
