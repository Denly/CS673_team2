import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Messages } from '/imports/api/message/messages';
import { MessageRooms } from '/imports/api/message/messageRooms.js';

// Create meteor method for creating messages to add security - can do security checking here
// adds type checking and other validations to guarantee authentic data
Meteor.methods({
  createMessage(text, toUserId) {
    check(text, String);
    check(toUserId, String);

    // Safe way of throwing meteor errors - error type, short error message, detailed error message (optional)
    var textLength = text.length;
    if (text.length < 1) {
      throw new Meteor.Error('invalid-text', 'This message is too short')}
    if (text.length > 50000) {
      throw new Meteor.Error('invalid-text', 'This message is too long')}
    const message = {
      fromUserId: this.userId,
      toUserId: toUserId,
      text: text,
      createdAt: new Date()
    }

    return Messages.insert(message);
  },

 updateMessageRoom(msgRoomId, text) {
   check(msgRoomId, String);
   console.log('msgRoomId');
   console.log(msgRoomId);
   console.log('text');
   console.log(text);

   // Safe way of throwing meteor errors - error type, short error message, detailed error message (optional)
   if (msgRoomId.length < 1) {
     throw new Meteor.Error('invalid-text', 'msgId Length should be > 0')}

   return MessageRooms.update(msgRoomId,
   {$set: {text: text, updatedAt: new Date()}});
 },

 createMessageRoom(toUserId, text) {
   check(text, String);
   check(toUserId, String);

   // Safe way of throwing meteor errors - error type, short error message, detailed error message (optional)
   var textLength = text.length;
   if (text.length < 1) {
     throw new Meteor.Error('invalid-text', 'This message is too short')}
   if (text.length > 50000) {
     throw new Meteor.Error('invalid-text', 'This message is too long')}
   console.log('userId2/toUserId:');
   console.log(toUserId);
   console.log('userId1/this.userId:');
   console.log(this.userId);
   return MessageRooms.insert({
     userId1: this.userId,
     userId2: toUserId,
     text: text,
     createdAt: new Date(),
   });
 }
});
