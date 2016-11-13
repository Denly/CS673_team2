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



const _clientEditProfile = function(){
  console.log('_clientEditProfile');
}

// new id 114254839052603
// daniel's id 699173800246359
const _serverNewUser = function(facebookId){
	Meteor.users.insert(
	{
		profile: {name: 'xx', intro: 'intro'},
		services: {facebook: {id : facebookId}}
	}
		);
}

export const Control = {
  clientSendMessage: _clientSendMessage,
  clientEditProfile: _clientEditProfile,
  serverNewUser: _serverNewUser,
}
