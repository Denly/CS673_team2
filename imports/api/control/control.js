import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';


/**
 * API for sending message to another user
 *
 * @param {string} toUserId - The unique ID of the recipient of the message
 * @param {string} text - The message to be sent to the recipient
 */
const _clientSendMessage = function( toUserId, text ){
  id = Meteor.user()._id

  Messages.insert({
    fromId:id,
    toUserId: toUserId,
    text: text,
    })
}


/**
 * API for editing user's profile on front-end
 */
const _clientEditProfile = function(){
  console.log('_clientEditProfile');
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
}
