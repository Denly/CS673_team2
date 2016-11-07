import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';



const _clientSendMessage = function( toUserId, text ){

  Messages.insert({
    fromUserId: Meteor.userId(),
    toUserId: toUserId,
    text: text,
    })
}



const _clientEditProfile = function(){
  console.log('_clientEditProfile');
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
}
