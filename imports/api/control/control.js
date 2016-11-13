import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';



const _clientSendMessage = function( toUserId, text ){
  id = Meteor.user()._id

  Messages.insert({
    fromId:id,
    toUserId: toUserId,
    text: text,
    })
}

const _clientEditProfile = function(text){
  user = Meteor.user();
  userId = Meteor.user()._id;
  user.profile.intro = text;
  Meteor.users.update(userId, {
    $set: {profile: user.profile}
  });
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
}
