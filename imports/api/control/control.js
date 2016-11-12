import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Messages } from '/imports/api/message/messages.js';
import { MessageRooms } from '/imports/api/message/messageRooms.js';
import { Images } from '/imports/api/image/images.js';



const _clientSendMessage = function( toUserId, text ){

  var MsgId =  Messages.insert({
    fromUserId: Meteor.userId(),
    toUserId: toUserId,
    text: text,
    createdAt: Date(),
  });

  if(!MsgId){
    console.error('insert msg failed');
    return 0;
  }

  var msgRoom = MessageRooms.findOne({fromUserId: Meteor.userId(), toUserId: toUserId});
  if( msgRoom ) {
      var MsgRoomSuccess = MessageRooms.update(msgRoom._id,
      {$set: {text: text, updatedAt: Date()}}
    );
  }else{
    var MsgRoomSuccess = MessageRooms.insert({
      fromUserId: Meteor.userId(),
      toUserId: toUserId,
      text: text,
      createdAt: Date(),
    });
  }

  if(!MsgRoomSuccess){
    console.error('insert msgRoom failed');
    Messages.remove(MsgId); // roll back, kind of
    return 0;
  }

  if(MsgId && MsgRoomSuccess){
    console.log('MsgId:',MsgId, ', MsgRoomSuccess:',MsgRoomSuccess )
  }

}

const _clientEditProfile = function(){
  console.log('_clientEditProfile');
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
}
