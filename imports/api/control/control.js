import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';



const _clientSendMessage = function( toUserId, text ){
  // new msg
  var MsgId =  Messages.insert({
    fromUserId: Meteor.userId(),
    toUserId: toUserId,
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
      fromUserId: Meteor.userId(),
      toUserId: toUserId,
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


const _clientGetLatestMsg = function(toUserId){
  return Messages.findOne({fromUserId: Meteor.userId(), toUserId: toUserId}, {sort: {createdAt: -1}});
};

const _clientEditProfile = function(text){
  user = Meteor.user();
  userId = Meteor.user()._id;
  user.profile.intro = text;
  Meteor.users.update(userId, {
    $set: {profile: user.profile}
  });
  console.log("intro update successful. New intro: " + text)
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
  clientGetLatestMsg: _clientGetLatestMsg,
}
