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
 * @example <caption>Example usage of method _clientSendMessage.</caption>
 * _clientSendMessage("fivE7HyBekduoKe67", "Hello! How are you today?");
 */
const _clientSendMessage = function( toUserId, text ){
  userIds = [Meteor.userId(), toUserId].sort();
  // new msg
  var MsgId =  Messages.insert({
    userId1: userIds[0],
    userId2: userIds[1],
    text: text,
    createdAt: new Date(),
  });

  if(!MsgId){
    console.error('insert msg failed');
    return 0;
  }
  // new msgRoom
  var msgRoom = MessageRooms.findOne({fromUserId: Meteor.userId(), toUserId: toUserId});
  if( msgRoom ) {
      var MsgRoomSuccess = MessageRooms.update(msgRoom._id,
      {$set: {text: text, updatedAt: new Date()}}
    );
  }else{
    var MsgRoomSuccess = MessageRooms.insert({
      userId1: userIds[0],
      userId2: userIds[1],
      text: text,
      createdAt: new Date(),
    });
  }

  if(!MsgRoomSuccess){
    console.error('insert msgRoom failed');
    Messages.remove(MsgId); // roll back, kind of
    return 0;
  }

  if(MsgId && MsgRoomSuccess){
    console.log('Successed, MsgId:',MsgId, ', MsgRoomSuccess:',MsgRoomSuccess )
  }
}


/**
 * API for getting latest message exchanged between current user, and another user
 * @param {String} toUserId - unique ID of the user for whose conversation the latest message has to be fetched
 * @returns {Object}
 * @example
 * // returns Object
 * _clientGetLatestMsg("fivE7HyBekduoKe67")
 */
const _clientGetLatestMsg = function(toUserId){
  return Messages.findOne({fromUserId: Meteor.userId(), toUserId: toUserId}, {sort: {createdAt: -1}});
};

/**
 * API for editing user's profile on front-end
 * @param {string} text - Text input as the new profile description
 * @example
 * _clientEditProfile("I am an edited piece of text!!");
 *
 */
const _clientEditProfile = function(text){
  user = Meteor.user();
  userId = Meteor.user()._id;
  user.profile.intro = text;
  Meteor.users.update(userId, {
    $set: {profile: user.profile}
  });
  console.log("intro update successful. New intro: " + text)
}

// new id 114254839052603
// daniel's id 699173800246359

/**
 * API for inserting a new user to `Users` collection, using facebook id as the argument.
 * @param {string} facebookId - Unique facebook ID of the new user being created.
 * @param {string} nameTemp - Name of the user
 * @param {string} introTemp - Brief intro/summary of the user or their self-description
 * @example
 * _serverNewUser("699173800246359", "Daniel Shih", "Hi there! I'm looking to meet new people!");
 */
const _serverNewUser = function(facebookId, nameTemp, introTemp){
	Meteor.users.insert(
	{
		profile: {name: nameTemp, intro: introTemp},
		services: {facebook: {id : facebookId}}
	}
		);
	console.log("Insertion successful" + nameTemp);
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
  serverNewUser: _serverNewUser,
  clientGetLatestMsg: _clientGetLatestMsg,
}
