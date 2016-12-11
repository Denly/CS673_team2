import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';


/**
 * API for sending message to another user
 * At this point the _clientSendMessage works on Message.jsx because
 * the Message.jsx is subscribing to the messagRoom publication
 * @param {string} toUserId - The unique ID of the recipient of the message
 * @param {string} text - The message to be sent to the recipient
 * @example <caption>Example usage of method _clientSendMessage.</caption>
 * _clientSendMessage("fivE7HyBekduoKe67", "Hello! How are you today?", msgRoomObject);
 */
const _clientSendMessage = function( toUserId, text, msgRoom){
  if(!toUserId || !Meteor.userId()){
    console.error("clientSendMessage failed, userId can't be null");
    return 0;
  }
  //to get [userId1, userId2] in MsgRoom fields
  userIds = [Meteor.userId(), toUserId].sort();

    //console.log('try find msgRoom ',msgRoom);
    if (msgRoom)
    {
        console.log('updating MR!');
        Meteor.call('updateMessageRoom', msgRoom._id, text, function (err, res){
        if (err)
        {
          console.log('Error updating msgRoom!');
          console.log(err);
          return;
        }
      });
    }
    else
    {
      console.log('new MR insert!');
      Meteor.call('createMessageRoom', toUserId, text, function (err, res){
      if (err)
      {
        console.log('Error creating msgRoom!');
        console.log(err);
        return;
      }
    });
   }

   // Create the message here, so we only do it if MessageRoom succeeds
Meteor.call('createMessage', text, toUserId, function (error, MsgId){
  if (error)
  {
    console.log(error);
    return;
  }
  console.log('Success!, MsgId:', MsgId);
})
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
  return Messages.findOne({
    "$or": [{
      toUserId:toUserId, fromUserId:Meteor.userId()
    }, {
      toUserId:Meteor.userId(), fromUserId:toUserId
    }]
  }, {sort: {createdAt: -1}});
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

  Meteor.call('editClientProfile', text, user, function (err, res){
  if (err)
  {
    console.log('Error editing client profile!!!!');
    console.log(err);
    return;
  }
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
